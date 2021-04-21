const { DynamoDB } = require('aws-sdk');
const dynamoClient = new DynamoDB.DocumentClient();

const ProductRepository = {
  async list({ after, limit }) {
    const params = {
      TableName: process.env.PRODUCTS_TABLE_NAME,
      FilterExpression: 'active = :active',
      ExpressionAttributeValues: { ':active': true },
      Limit: limit,
    };
    if (after) params.ExclusiveStartKey = { id: after };

    const result = await dynamoClient.scan(params).promise();
    const { Items, LastEvaluatedKey } = result;
    return { products: Items, lastKey: LastEvaluatedKey };
  },
};

module.exports = ProductRepository;
