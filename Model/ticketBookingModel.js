const mongoose = require('mongoose');

var ticketBookingSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true,'userId required'],
        ref : 'userModel'
    },
    seatId : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true,'seatId required'],
        ref : 'seatModel'
    },
    bookedDate : {
        type : String,
        default : new Date().toISOString()
    },
    bookedType : {
        type : String,
        trim : true,
        required : [true,'bookedType required']
    },
    bookedDesc : {
        type : 'String',
        trim : true
    },
    deletedAt : {
        type : Date
    },
    amount : {
        type : Number,
        required : [true, 'amount required']
    }
},{
    versionKey :false,
    timestamps:true
});

ticketBookingSchema.index({seatBusId  : 1,bookedDate : 1},{unique :true});

module.exports = mongoose.model('ticketBooking',ticketBookingSchema,'ticket_booking');