const Result = require('folktale/result');
const jwt = require('jsonwebtoken');
const Config = require('../../config');
const User = require('./user');

class AuthorizeUser {
  async authorize({ token, method }) {
    const decodedUser = await userFromToken(token);
    return decodedUser.chain((user) => {
      if (user.isAllowedFor(method)) return Result.Ok({ user });

      return Result.Error({
        user,
        error: [
          {
            message: `User "${user.name}" is not allowed to access "${method}"`,
          },
        ],
      });
    });
  }
}

async function userFromToken(token) {
  try {
    const decoded = await jwt.verify(token, Config.Jwt.Key, {
      algorithms: [Config.Jwt.Algorithm],
    });
    return Result.Ok(new User(decoded));
  } catch (err) {
    return Result.Error([{ message: 'Invalid Token', err }]);
  }
}

module.exports = AuthorizeUser;
