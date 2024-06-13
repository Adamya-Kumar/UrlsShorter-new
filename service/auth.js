const jwt = require('jsonwebtoken');
const salt="VOQGTvlaWmxs2Nj";
function setUser(user) {
  return jwt.sign(user,salt)
}
function getUser(token) {
  if(!token) {return null;}
  return jwt.verify(token,salt)
}

module.exports = {
  setUser,
  getUser,
};
