const { S3 } = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const Result = require('folktale/result');
const Config = require('../../config');

const s3Client = new S3();

class GenerateUploadUrl {
  async newURL({ extension }) {
    try {
      const key = `${uuidv4()}.${extension}`;
      const url = await s3Client.createPresignedPost({
        Bucket: Config.Buckets.Images,
        Fields: {
          key: key,
        },
      });
      return Result.Ok(url);
    } catch (err) {
      return Result.Error(err);
    }
  }
}

module.exports = GenerateUploadUrl;
