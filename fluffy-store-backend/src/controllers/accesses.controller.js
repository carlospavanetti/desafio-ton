const HttpResponse = require('../lib/HttpResponse');
const AccessesCounter = require('../core/accesses/counter');

const AccessesController = {
  async hit() {
    try {
      await AccessesCounter.hit();
      return HttpResponse(200, 'OK');
    } catch (err) {
      return HttpResponse(500, 'Internal server error');
    }
  },
};

module.exports = AccessesController;
