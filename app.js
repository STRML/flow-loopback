// @flow
function User(name: string) {
  this.name = name;
};

User.new = function(name: string): User {
  return new User(name);
}

module.exports = {
  User: User
};

require('./foo');
