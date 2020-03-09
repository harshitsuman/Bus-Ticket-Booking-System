
var ticketBookingModel = require('../Model/ticketBookingModel.js');

module.exports = {

    getAllDetails : (req,res,next) => {

        var date = new Date(req.params.bookedDate).toISOString().substring(0,10);

        ticketBookingModel.find({
       bookedDate : new RegExp(date,'i')  
        }).populate('userId').populate('seatId')
        .then(result => {
          res.send(result);
        }).catch(err => {
          res.status(500).send(err);
        });

    },
    getBookedDetails : (req,res,next) => {
        var date = new Date(req.params.bookedDate).toISOString().substring(0,10);

        ticketBookingModel.find({
            bookedDate :  new RegExp(date,'i'),
            deletedAt : {$exists : false}}).populate('userId').populate('seatId').then(result => {
            res.send(result);
          }).catch(err => {
            res.status(500).send(err);
          });

    },
    bookTicket : (req,res,next) => {

      ticketBookingModel.create(req.body).then(result => {
        res.send(result);
      }).catch(err => {
        res.status(500).send(err);
      });

    },
    cancelTicket : (req,res,next) => {

        ticketBookingModel.findByIdAndUpdate(req.params._id,{deletedAt : new Date().toISOString()},
        {runValidators:true,new:true}).then(result => {
            res.send(result);
          }).catch(err => {
            res.status(500).send(err);
          });

    },
    cancelDetails : (req,res,next) => {
        var date = new Date(req.params.bookedDate).toISOString().substring(0,10);
        ticketBookingModel.find({
            bookedDate :  new RegExp(date,'i'),
            deletedAt : {$exists : true}}).populate('userId').populate('seatId').then(result => {
            res.send(result);
          }).catch(err => {
            res.status(500).send(err);
          });

    }
}