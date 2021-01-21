const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

// just to test the token
router.get('/check-token', usersCtrl.checkToken);

module.exports = router;