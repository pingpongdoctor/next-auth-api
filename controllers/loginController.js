const User = require("../model/userModel");

exports.loginAccount = async function (req, res) {
  const { password, email, googleId, username } = req.body;

  //CREDENTIAL AUTHENTICATION
  if (email && password && !googleId && !username) {
    const foundUser = await User.findOne({ email, password });
    if (foundUser) {
      return res.status(200).json({
        message: "successful authentication",
        user: {
          id: foundUser._id,
          username: foundUser.username,
        },
      });
    } else {
      return res.status(400).json({
        message: "fail authentication",
      });
    }
  }

  //GOOGLE AUTHENTICATION
  if (email && !password && googleId && username) {
    const foundUser = await User.findOne({ email, googleId, username });
    if (foundUser) {
      console.log("runnning2");
      return res.status(200).json({
        message: "User is authenticated",
        id: foundUser._id,
      });
    } else {
      console.log("runnning3");
      const createdUser = await User.create({
        email,
        username,
        google_id: googleId,
      });
      return res.status(201).json({
        message: "User is created and is authenticated",
        id: createdUser._id,
      });
    }
  }

  return res.status(400).json({
    message: "wrong credentials",
  });
};
