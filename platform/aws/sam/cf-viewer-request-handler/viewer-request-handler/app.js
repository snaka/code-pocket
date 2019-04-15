'use strict';
const jwt = require('jsonwebtoken');

const pass = 'c42a791b8702e17c6491717c35a213ed6e04395dbb5561e3c73750c94e4e86541b93d98e356f3a2af778418e0e120bdf231b4378bf6fa026b1ad28187f924f3b';

const error_body = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Lambda@Edge test</title>
  </head>
  <body>
    <p>Error from Lambda@Edge</p>
  </body>
</html>
`;

const error_response = {
  status: '403',
  statusDescription: 'Forbidden',
  headers: {
    'content-type': [
      {
        key: 'Content-Type',
        value: 'text/html'
      }
    ]
  },
  body: error_body,
};

function parseCookies(headers) {
  const parsedCookie = {};
  if (headers.cookie) {
		headers.cookie[0].value.split(';').forEach((cookie) => {
			if (cookie) {
				const parts = cookie.split('=');
				parsedCookie[parts[0].trim()] = parts[1].trim();
			}
		});
  }
  return parsedCookie;
}

function extractTokenFromHeader(headers) {
	const parsedCookies = parseCookies(headers);
  return parsedCookies['myToken'];
}

exports.lambdaHandler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  console.log('Request:', JSON.stringify(request));

  const headers = request.headers;
  const token = parseCookies(headers)['font_access_token'];
  console.log('font_access_token:', token);

  if (!token) {
    callback(null, error_response);
    console.log('ACCESS DENIED');
    return;
  }

  try {
    const payload = jwt.verify(token, pass);
    console.log('payload:', JSON.stringify(payload));
    const exp = payload.exp;
    const now = Math.round((new Date()).getTime() / 1000);

    console.log('ACCEPTED');
    console.log('remain: ', exp - now);
    callback(null, request);
  } catch (e) {
    callback(null, error_response);
    console.log('TOKEN VERIFICATIO FAILED');
  }
};
