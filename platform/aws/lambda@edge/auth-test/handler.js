'use strict';
const jwt = require('jsonwebtoken');
const pass = 'hogehoge';

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

module.exports.hello = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const headers = request.headers;
  console.log('Request:', JSON.stringify(request));

  const token = parseCookies(headers)['myToken'];
  const decoded = jwt.verify(token, pass);
  console.log('Decoded Token:', JSON.stringify(decoded));

  callback(null, request)
};
