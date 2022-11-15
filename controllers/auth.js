const User = require('../models/user.model')




exports.signup = async (req, res) => {

    const userObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        companyName: req.body.companyName,
        MobileNo: req.body.MobileNo,
        email: req.body.email,
        address: {
            address: req.body.address.address,
            country: req.body.address.country,
            state: req.body.address.state,
            city: req.body.address.city,
            pincode: req.body.address.pincode
        }
    }
    try {

        const userCreated = await User.create(userObj);


        const response = {
            firstName: userCreated.firstName,
            lastName: userCreated.lastName,
            companyName: userCreated.companyName,
            MobileNo: userCreated.MobileNo,
            email: userCreated.email,
            address: {
                address: userCreated.address,
                country: userCreated.country,
                state: userCreated.state,
                city: userCreated.city,
                pincode: userCreated.pincode
            }
        }
        console.log(userCreated);
        res.status(201).send(response);

    } catch (err) {
        console.log("Some error happened ", err.message);
        res.status(500).send({
            message: "Some internal server error"
        });
    }
}


exports.findAll= async (req,res)=>{
    try{

        const users = await User.find();

        res.status(200).send({
            Users : users
        })
    }catch(err){
        console.log("Some error happened ", err.message);
        res.status(500).send({
            message: "Some internal server error"
        });
    }
}