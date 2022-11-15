const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true
    },
    companyName : {
        type : String,
        required : true
    },
    MobileNo : {
        type : Number,
        minLength : 10,
         required : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength: 10,
        unique : true
    },
    address : {
        address : {
            type : String,
        },
        country : {
            type : String
        },
        state : {
            type : String
        },
        city : {
            type : String,
        },
        pincode : {
            type : String
        }
    }
},{
    timestamps:true, versionKey: false
});

module.exports = mongoose.model("user", userSchema);