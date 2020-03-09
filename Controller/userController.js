
var userModel = require('../Model/userModel.js');

module.exports = {

    getAllUser : (req,res,next) => {
        userModel.find().then(result => {
            res.send(result);
        }).catch(err => {
            res.status(500).send(err);
        });

    },
    addUser : (req,res,next) => {

        userModel.create(req.body).then(result => {
            res.send(result);
        }).catch(err => {
            res.status(500).send(err);
        })

    },
    updateUser : (req,res,next) => {

        var data = {
            _id : req.params._id,
            userName : null,
            password : null,
            mobileNo : null,
            email : null
        }

        data = Object.assign(data,req.body);

        userModel.findByIdAndUpdate(data._id,data,{runValidators:true, new:true}).then(result => {
            res.send(result);
        }).catch(err => {
            res.status(500).send(err);
        });
    },
   deleteUser : (req,res,next) => {

    userModel.findByIdAndDelete(req.params._id).then(result => {
        res.send(result);
    }).catch(err => {
        res.status(500).send(err);
    })

   }

}