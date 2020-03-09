
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/NodeDb',{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true});

var db = mongoose.connection;

db.on('error',console.error.bind(console,'Error in creating connection !!'));
db.once('open',console.log.bind(console,'Connection created successfully !!'));