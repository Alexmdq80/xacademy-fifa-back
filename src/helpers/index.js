const UserDB = require('./users');
const PlayerDB = require('./players');
const { paginate, convertirAEntero } = require('./utils');

module.exports = { paginate, convertirAEntero, UserDB, PlayerDB };

  