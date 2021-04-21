const AuthController = require('../controllers/auth.controller');
const HttpResponse = require('../lib/HttpResponse');
const IAMPolicy = require('../lib/IAMPolicy');

async function authenticate(event) {
  try {
    const body = JSON.parse(event.body);
    const result = await AuthController.authenticate(body);

    return HttpResponse(200, result);
  } catch (err) {
    return HttpResponse(400, [{ message: 'Invalid JSON data' }]);
  }
}

async function authorize(event) {
  const token = event.authorizationToken;
  const method = event.methodArn;
  const response = await AuthController.authorize({ token, method });
  const user = JSON.parse(response.body).user || {};
  const effect = response.statusCode === 200 ? 'Allow' : 'Deny';
  return IAMPolicy(user.name, effect, method, { user });
}

module.exports = { authenticate, authorize };
