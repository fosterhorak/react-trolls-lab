const express = require('express');
const router = express.Router();
const trollsCtrl = require('../../controllers/api/trolls');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/trolls
router.get('/', ensureLoggedIn, trollsCtrl.index);
router.post('/', trollsCtrl.create);
// router.get('/:id', ensureLoggedIn, trollsCtrl.show);
// router.put('/:id', ensureLoggedIn, trollsCtrl.update);
// router.delete('/:id', ensureLoggedIn, trollsCtrl.delete);


module.exports = router;