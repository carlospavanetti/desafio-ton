const AdminImagesController = require('../../controllers/admin/images.controller');
const HttpResponse = require('../../lib/HttpResponse');

async function upload(event) {
  try {
    const { extension } = JSON.parse(event.body);
    return AdminImagesController.upload({ extension });
  } catch (err) {
    return HttpResponse(400, [{ message: 'Could not generate url' }]);
  }
}

module.exports = { upload };
