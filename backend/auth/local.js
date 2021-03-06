const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");

const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/epingle";
const db = pgp(connectionString);

passport.use(
  new LocalStrategy((username, password, done) => {
    db.one("SELECT * FROM username WHERE username = ${username}", {
      username: username
    })
      .then(user => {
        if (!helpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          return done(null, {username:username.username, id: username.id, profile_pic:username.profile_pic});
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

init();

module.exports = passport;
