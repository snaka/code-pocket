'use strict';

module.exports.hello = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  const headers = request.headers;
  console.log('Request:', JSON.stringify(request));
  callback(null, request)
  return;
};
