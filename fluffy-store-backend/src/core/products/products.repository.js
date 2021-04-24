const Config = require('../../config');
const DynamoClient = require('../../lib/DynamoClient');

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

    const result = await DynamoClient.scan(params).promise();
    const { Items, LastEvaluatedKey } = result;
    return { products: Items, lastKey: LastEvaluatedKey };
  },

  put(obj) {
    return DynamoClient.put({
      TableName,
      Item: { ...obj, createdAt: new Date().toISOString() },
    }).promise();
  },
};

module.exports = ProductRepository;
