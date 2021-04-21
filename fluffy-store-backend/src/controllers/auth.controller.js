const HttpResponse = require('../lib/HttpResponse');
const AuthorizeUser = require('../core/users/AuthorizeUser');
const AuthenticateUser = require('../core/users/AuthenticateUser');
const repository = require('../core/users/users.repository');

const AuthController = {
  async authenticate(body) {
    const result = await new AuthenticateUser({ repository }).authenticate(body);
    return result.matchWith({
      Ok: ({ value }) => HttpResponse(200, value),
      Error: ({ value }) => HttpResponse(401, 'Authentication Failed'),
    });
  },

  async authorize({ token, method }) {
    const result = await new AuthorizeUser().authorize({ token, method });
    return result.matchWith({
      Ok: ({ value }) => HttpResponse(200, value),
      Error: ({ value }) => HttpResponse(401, value),
    });
  },
};

module.exports = AuthController;
