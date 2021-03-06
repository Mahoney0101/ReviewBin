const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/users');

router
  .route('/register')
  .post(ctrlUser.usersCreate);

router
  .route('/')
  .post(ctrlUser.usersCreate);
  
router
  .route('/login')
  .post(ctrlUser.usersReadOne);

module.exports = router;