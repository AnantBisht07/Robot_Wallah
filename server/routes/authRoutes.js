const express = require("express");
const { signup, signin } = require("../controllers/authController");
const { registration } = require('../controllers/studentController'); 

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
// router.post('/send-otp', forgotpassword);
// router.post('/reset-password', verifyOtp);

router.post("/registration", registration);


module.exports = router;
