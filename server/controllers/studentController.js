const Student = require("../models/Student");



// user registration
exports.registration = async(req, res) => {
   try {
    const { name, fatherName, schoolName, schoolType, standard, district, state, refferalCode } = req.body;
    if(!name || !fatherName || !schoolName || !schoolType || !standard || !district || !state ) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        })
    }

    // create registration query
    const newStudent = new Student ({
        name, 
        fatherName,
        schoolName,
        schoolType,
        standard,
        district,
        state,
        refferalCode
    })

    await newStudent.save();
    res.status(200).json({
        success: true,
        message: "Query recieved successfully!"
    })

   } catch (error) {
    console.log('something went wrong!', error);
    res.status(500).json({ message: "Server error" });
   }
}


