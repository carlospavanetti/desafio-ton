const Result = require('folktale/result');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Config = require('../../config');

class AuthenticateUser {
  constructor({ repository }) {
    this.repository = repository;
  }

  async authenticate({ username, password }) {
    const user = await this.repository.userByName(username);
    return user.chain(async (u) => {
      const match = await bcrypt.compare(password, u.passwordHash);
      if (!match) return Result.Error([{ message: 'Wrong password' }]);

      const payload = { name: username, scopes: u.scopes || [] };
      const token = jwt.sign(payload, Config.Jwt.Key, {
        algorithm: Config.Jwt.Algorithm,
        expiresIn: Config.Jwt.ExpirationSeconds,
      });
      return Result.Ok(token);
    });
  }
}

module.exports = AuthenticateUser;
