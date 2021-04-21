const AccessesController = require('../controllers/accesses.controller');

async function hit(event) {
  return AccessesController.hit();
}

module.exports = { hit };
