'use strict';

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

exports.lambdaHandler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  console.log('Request:', JSON.stringify(request));

  const response = {
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
  callback(null, response);
};
