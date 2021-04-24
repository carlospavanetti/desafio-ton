const User = require('../../src/core/users/user');

describe('User entity', () => {
  let user;

  beforeEach(() => {
    user = new User({ scopes: ['products:list', 'accesses:count'] });
  });

  it('should be allowed to access methods from its scopes', () => {
    expect(user.isAllowedFor('arn:aws:execute-api:::*/GET/products')).toBeTruthy();
    expect(user.isAllowedFor('arn:aws:execute-api:::*/GET/admin/accesses')).toBeTruthy();
  });

  it('should be not allowed to access methods not in its scopes', () => {
    expect(user.isAllowedFor('arn:aws:execute-api:::*/POST/admin/product')).toBeFalsy();
    expect(user.isAllowedFor('arn:aws:execute-api:::*/POST/admin/image')).toBeFalsy();
  });
});
