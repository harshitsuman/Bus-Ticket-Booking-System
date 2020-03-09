const mongoose = require('mongoose');

var busSchema = new mongoose.Schema({

    busType : {
        type : String,
        required : ['true','busType required'],
        trim : true
    },
    busDesc : {
        type : String,
        trim : true
    }
},{
    versionKey : false,
    collection : 'bus'
});

module.exports = mongoose.model('busModel',busSchema);