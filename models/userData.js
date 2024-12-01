const userDb = require('../utils/userDatabaseUtil')
const bcrypt = require('bcrypt')

const sessionIdToUserMap = new Map()

module.exports = class Users {
  static signUp(username,email,password){
    bcrypt.hash(password, 10, function(err, hash) {
      console.log(hash)
    return userDb.execute('INSERT INTO FRSusers (username,email,password) values(?,?,?)',[username,email,hash])
  });
  }

  static async Login (email,password){
    try{
    const [[user]] = await userDb.execute('SELECT * FROM FRSusers  WHERE email = ?',[email])
    console.log(user)
    if(user === undefined) throw new Error("Please Create Your Account")
    console.log(user.password)
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) new Error("Invalid Credentials, please Try again")
    return user
    }catch(err){
      return err
    }
  }
 
  static setUser(id,user){
    sessionIdToUserMap.set(id,user)
  }

  static getUser(id){
  return sessionIdToUserMap.get(id)
  }
}
