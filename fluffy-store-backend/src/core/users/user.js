const Roles = require('./roles');

class User {
  constructor({ id, name, scopes }) {
    this.id = id;
    this.name = name;
    this.scopes = scopes;
  }

  isAllowedFor(method) {
    return this.scopes.find((scope) => ~method.indexOf(Roles[scope]));
  }
}

module.exports = User;
