var router = require('express').Router();
var busController = require('../Controller/busController.js');

router.get('/',busController.getAllBusInfo);
router.get('/:_id',busController.getBusInfo);
router.post('/',busController.postBusInfo);
router.put('/:_id',busController.modifyBusInfo);
router.delete('/:_id',busController.deleteBusInfo);

module.exports = router;