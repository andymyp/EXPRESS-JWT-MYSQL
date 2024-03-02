const bcrypt = require('bcrypt');
const db = require('../config/database');
const membership_function = require('../functions/membership');

exports.registration = async (req, res) => {
  const { error } = await membership_function.validateCreate(req.body);
  if (error) {
    return res.status(400).json({
      status: 102,
      message: error.details[0].message,
      data: null
    });
  }

  const sql = 'INSERT INTO membership (email, first_name, last_name, password) VALUES (?, ?, ?, ?)';

  const salt = bcrypt.genSaltSync();
  const password = bcrypt.hashSync(req.body.password, salt);

  const req_body = [
    req.body.email,
    req.body.first_name,
    req.body.last_name,
    password,
  ];

  db.query(sql, req_body, (error) => {
    if (error) {
      return res.status(400).json({
        status: 102,
        message: error.message,
        data: null,
      });
    }

    return res.status(200).json({
      status: 0,
      message: 'Registration successfully! Please login',
      data: null,
    });
  });
};
