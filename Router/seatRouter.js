var router = require('express').Router();
var seatController = require('../Controller/seatController.js');

router.get('/',seatController.getAllSeatInfo);
router.get('/:_id',seatController.getSeatInfo);
router.post('/',seatController.postSeatInfo);
router.put('/:_id',seatController.modifySeatInfo);
router.delete('/:_id',seatController.deleteSeatInfo);

module.exports = router;