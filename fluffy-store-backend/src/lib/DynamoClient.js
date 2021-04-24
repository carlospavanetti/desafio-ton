const { DynamoDB } = require('aws-sdk');

const DynamoClient = ['test'].includes(process.env.NODE_ENV)
  ? new DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    sslEnabled: false,
  })
  : new DynamoDB.DocumentClient();

module.exports = DynamoClient;
