const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/authMiddleware');
const roleController = require('../Controllers/roleController.js');
router.post('/roles', verifyToken, roleController.createRole);
router.get('/roles', verifyToken, roleController.retrieveRole);
router.get('/roles/:id', verifyToken, roleController.retrieveRoleId);
router.put('/roles/:id', verifyToken, roleController.updateRole);
router.delete('/roles/:id', verifyToken, roleController.deleteRole);
module.exports = router;
