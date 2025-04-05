const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// user signup
exports.signup = async (req, res) => {
  try {
    const { username, number, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "Username already taken" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user
    const newUser = new User({ username, number, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// user login user jwt
exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }
  

    // Find user
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ success: true, message: "Signin successful", token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};


// forgot password reset link
// exports.forgotpassword = async(req, res) => {
//   const { number } = req.body;
//   try {
//     const user = await User.findOne( { number });
//     if(!user) return res.status(400).json({
//        success: false,
//        message: "User not found "
//       });

//       res.status(200).json({ 
//         success: true,
//         message: "OTP sent succesfully! Please check your phone" 
//       });

//   } catch (error) {
//     res.status(500).json({ message: err.message });
//   }
// }


// verify otp
// exports.verifyOtp = async(req, res) => {
//   const { number, otp, newPassword } = req.body;

//   try {
//     // verify otp using firebase
//     const decodedToken = await admin.auth().verifyIdToken(otp);
//     if(decodedToken.number !== phone){
//       return res.status(400).json({ success: false, message: "OTP verification failed"});
//     }
//     // hash the new password
//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     // update in mongodb
//     await User.findOneAndUpdate( {phone}, {password: hashedPassword});

//     res.json({ success: true, message: "Password reset successfully" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "OTP verification failed" });
//   }
// }

