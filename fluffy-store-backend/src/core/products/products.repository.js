const Config = require('../../config');
const { DynamoDB } = require('aws-sdk');
const dynamoClient = new DynamoDB.DocumentClient();

const TableName = Config.Tables.Products;

const ProductRepository = {
  async list({ after, limit }) {
    const params = {
      TableName,
      FilterExpression: 'active = :active',
      ExpressionAttributeValues: { ':active': true },
      Limit: limit,
    };
    if (after) params.ExclusiveStartKey = { id: after };

    const result = await dynamoClient.scan(params).promise();
    const { Items, LastEvaluatedKey } = result;
    return { products: Items, lastKey: LastEvaluatedKey };
  },

  put(obj) {
    return dynamoClient
      .put({
        TableName,
        Item: { ...obj, createdAt: new Date().toISOString() },
      })
      .promise();
  },
};

module.exports = ProductRepository;
