const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref:'users',
    }
  },
  { timestamps: true }
);

const Users = mongoose.model("Url", UserSchema);

module.exports = Users;
