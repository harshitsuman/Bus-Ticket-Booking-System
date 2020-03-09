var router = require('express').Router();

var userController = require('../Controller/userController.js');

router.get('/',userController.getAllUser);
router.post('/',userController.addUser);
router.put('/:_id',userController.updateUser);
router.delete('/:_id',userController.deleteUser);

module.exports = router;