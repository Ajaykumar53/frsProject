const JWT = require('jsonwebtoken')
const secret = "^#(*#GHDJJKjAJ587789GUWRoYT&^Rg"


module.exports = class Auth {
  static setCookie(user){
    return JWT.sign({
      userId : user.userId,
      email : user.email
    },secret)
  }

  static getCookie(token){
    
  }
}