const AdminAccessesController = require('../../controllers/admin/accesses.controller');

async function count(event) {
  return AdminAccessesController.count();
}

module.exports = { count };
