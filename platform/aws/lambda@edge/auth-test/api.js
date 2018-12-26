'use strict';
const jwt = require('jsonwebtoken');

const pass = 'hogehoge';

function generateToken() {
  const expiresAt = Date.now() + (60 * 60 * 1000); // 1 hour
  const token = jwt.sign({
    resources: [
      {
        "path": "/contents/1/004f2f0e-28fd-409f-b4c2-cadfce574566/fd401342/fd401342.png",
        "expiresAt": expiresAt
      },
      {
        "path": "/contents/123/2051363c-2348-4281-b079-984934b09da4/*",
        "expiresAt": expiresAt
      }
    ]
  }, pass, { expiresIn: '1h' } );
  return token;
}

function cookieValue() {
  return `myToken=${generateToken()}; max-age=3600;`;
}

module.exports.hoge = (event, context, callback) => {
  console.log('event:', JSON.stringify(event));
  callback(null, {
    "name": "hoge",
    "Cookie": cookieValue()
  });
};
