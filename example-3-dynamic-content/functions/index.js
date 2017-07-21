const functions = require('firebase-functions');
const crypto = require('crypto');

exports.token = functions.https.onRequest((req, res) => {
  let email = req.query.email || 'email@example.com';
  let token = crypto.createHash('md5').update(email).digest("hex");

  res.status(200).send({ token });
});