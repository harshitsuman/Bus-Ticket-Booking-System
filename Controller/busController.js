var busModel = require('../Model/busModel.js');

module.exports = {

    getAllBusInfo : (req,res,next) => {

        busModel.find().then(result => {
            res.send(result);
            
        }).catch(err => {
            res.status(500).send(err);
        });
    },

getBusInfo : (req,res,next) => {

busModel.findById(req.params._id).then(result => {
res.send(result);
},err => {
res.status(500).send(err);
});

},
postBusInfo : (req,res,next) => {

    busModel.create(req.body).then(result => {
        res.send(result);
    }).catch(err => {
        res.status(500).send(err);
    });

},
modifyBusInfo: (req,res,next) => {

    var data = {
        _id : req.params._id,
        busType : null,
        busDesc : null
    }
    data = Object.assign(data,req.body);

    busModel.findByIdAndUpdate(data._id,data,{runValidators:true}).then(result => {
      res.send(result);
    }).catch(err => {
      res.status(500).send(err);
    });

},
deleteBusInfo : (req,res,next) => {

    busModel.findByIdAndDelete(req.params._id).then(result => {
        res.send(result);
    }).catch(err => {
        res.status(500).send(err);
    });

}

};