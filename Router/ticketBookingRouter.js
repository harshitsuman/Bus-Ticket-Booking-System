var router = require('express').Router();

var ticketBookingController = require('../Controller/ticketBookingController.js');

router.get('/:bookedDate',ticketBookingController.getAllDetails);
router.get('/booked/:bookedDate',ticketBookingController.getBookedDetails)
router.post('/',ticketBookingController.bookTicket);
router.put('/:_id',ticketBookingController.cancelTicket);
router.get('/canceled/booked/ticket/:bookedDate',ticketBookingController.cancelDetails);
module.exports = router;