const Result = require('folktale/result');
const { DynamoDB } = require('aws-sdk');
const dynamoClient = new DynamoDB.DocumentClient();
const Config = require('../../config');

const Repository = {
  async userByName(username) {
    const params = {
      TableName: Config.Tables.Users,
      Key: { name: username },
    };
    try {
      const { Item } = await dynamoClient.get(params).promise();
      return Result.Ok(Item);
    } catch (err) {
      return Result.Error(err);
    }
  },
};

module.exports = Repository;
