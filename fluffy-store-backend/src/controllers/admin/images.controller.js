const GenerateUploadUrl = require('../../core/images/GenerateUploadUrl');
const HttpResponse = require('../../lib/HttpResponse');

const AdminImagesController = {
  async upload({ extension }) {
    const result = await new GenerateUploadUrl().newURL({ extension });
    return result.matchWith({
      Ok: ({ value: url }) => HttpResponse(200, url),
      Error: ({ value }) => HttpResponse(500, value),
    });
  },
};

module.exports = AdminImagesController;
