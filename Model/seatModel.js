
const mongoose = require('mongoose');

var seatSchema = new mongoose.Schema({

seatBusId : {
    type : mongoose.Schema.Types.ObjectId,
    required:[true,'seatBusId required'],
   // ref : 'busModel'
},
seatDesc : {
    type:String,
    trim:true
},
seatNum : {
    type : Number,
    required : [true,'seatNum required']
},
seatType : {
    type : String,
    required : [true,'seatType required'],
    trim : true
}
},{
    versionKey:false,
    collection:'seat'
});

module.exports = mongoose.model('seatModel',seatSchema);