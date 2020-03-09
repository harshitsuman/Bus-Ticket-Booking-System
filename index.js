require('dotenv').config();
require('./connection.js');
const express = require('express');
var app = express();

app.use(express.json());

app.use(process.env.BASE_URL+'bus',require('./Router/busRouter.js'));
app.use(process.env.BASE_URL+'seat',require('./Router/seatRouter.js'));
app.use(process.env.BASE_URL+'ticket',require('./Router/ticketBookingRouter.js'));
app.use(process.env.BASE_URL+'user',require('./Router/userRouter.js'));

var port = process.env.PORT || 3001;
app.listen(port,console.log.bind(console,`server is up on port ${port}`));