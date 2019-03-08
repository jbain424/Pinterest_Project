const passport = require("passport");
const db = require('../db/queries/index.js')


module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, {username:username.username, id: username.id, profile_pic:username.profile_pic});
  });

  passport.deserializeUser((username, done) => {
    db.one("SELECT * FROM username WHERE username = ${username}",
    { username: username
    })
      .then(user => {
        done(null, {username:username.username, id: username.id, profile_pic:username.profile_pic});
      })
      .catch(err => {
        done(err, null);
      });
  });
};
