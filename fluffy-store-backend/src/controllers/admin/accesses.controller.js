const HttpResponse = require('../../lib/HttpResponse');
const AccessesCounter = require('../../core/accesses/counter');

const AdminAccessesController = {
  async count() {
    try {
      const value = await AccessesCounter.count();
      return HttpResponse(200, { count: value });
    } catch (err) {
      return HttpResponse(500, 'Internal server error');
    }
  },
};

module.exports = AdminAccessesController;
