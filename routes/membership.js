const router = require('express').Router();
const controller = require('../controllers/membership');

router.post('/registration', controller.registration);

module.exports = router;