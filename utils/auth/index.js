const passport = require('passport');

const LocalStrategy = require('./strategies/local.stretegy');
const JwtStrategy = require('./strategies/jwt.stretegy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);

module.exports = passport;
