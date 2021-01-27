const express = require('express');
const router = express.Router();
const trollsCtrl = require('../../controllers/api/trolls');
//const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/trolls
router.get('/', trollsCtrl.index);
router.post('/', trollsCtrl.create);
router.get('/:id', trollsCtrl.show);
router.put('/:id', trollsCtrl.update);
router.delete('/:id', trollsCtrl.delete);


module.exports = router;