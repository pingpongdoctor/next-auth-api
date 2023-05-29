const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true],
    },
    username: {
      type: String,
      require: [true],
    },
    password: {
      type: String,
      require: [false],
    },
    google_id: {
      type: String,
      require: [false],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
