const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../secrets/index");

function tokenBuilder(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
    role: user.role_name,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = {
  tokenBuilder,
};
