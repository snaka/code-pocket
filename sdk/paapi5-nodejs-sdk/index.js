const paapi = require ('paapi5-nodejs-sdk');

const client = paapi.ApiClient.instance;

client.accessKey = process.env.AWS_ACCESS_KEY_ID;
client.secretKey = process.env.AWS_SECRET_KEY;
client.host = 'webservices.amazon.co.jp';
client.region = 'us-west-2';

const api = new paapi.DefaultApi();

const searchItemsRequest = new paapi.SearchItemsRequest();

searchItemsRequest['PartnerTag'] 
