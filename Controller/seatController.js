var seatModel = require('../Model/seatModel.js');

module.exports = {

    getAllSeatInfo : (req,res,next) => {

        seatModel.find().populate({
        path : 'seatBusId',
        model : 'busModel'
        }).then(result => {
            res.send(result);
        }).catch(err => {
            res.status(500).send(err);
        });

        // seatModel.find().populate('seatBusId').then(result => {
        //     res.send(result);
        // }).catch(err => {
        //     res.status(500).send(err);
        // });

    },

    getSeatInfo : (req,res,next) => {

        seatModel.findById(req.params._id).populate({
            path : 'seatBusId'
            }).then(result => {
            res.send(result);
        }).catch(err => {
            res.status(500).send(err);
        });
    },

    postSeatInfo : (req,res,next) => {

        seatModel.create(req.body).then(result => {
            res.send(result);
        }).catch(err => {
            res.status(500).send(err);
        });
    },

    modifySeatInfo : (req,res,next) => {

        var data = {
            _id : req.params._id,
            seatBusId : null,
            seatNum : null,
            seatType : null
        }

        data = Object.assign(data,req.body);

       seatModel.findByIdAndUpdate(data._id,data,{runValidators:true,new:true}).then(result => {
           res.send(result);
       },err => {
           res.status(500).send(err);
       })
    },
    deleteSeatInfo : (req,res,next) => {

        seatModel.findByIdAndDelete(req.params._id).then(result => {
            res.send(result);
        },err => {
            res.status(500).send(err);
        })
        
    }
}