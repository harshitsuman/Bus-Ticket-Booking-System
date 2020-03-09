const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    userName : {
        type : String,
        trim : true,
        minlength : [6,'UserName should be length of atleast 6']
    },
    password : {
        type : String,
        required : [true,'password required']
    },
    mobileNo : {
        type : String,
        required : [true,'mobileNo required'],
        trim : true,
    },
    email : {
        type : String,
        required : [true,'email required'],
        trim : true,
        match : (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)
    },
    address : {
        type : String,
        trim : true,
    }

},{
    versionKey :false,
    collection : 'user'
});

module.exports = mongoose.model('userModel',userSchema);