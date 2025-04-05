const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  schoolType: {
    type: String,
    enum: ["government", "private"],
    required: true,
  },
  standard: {
    type: Number,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  refferalCode: {
    type: Number,
  }
  //   qrcode: {
  //    type: String,
  //    required: true,
  // },
});

module.exports = mongoose.model("Student", StudentSchema);
