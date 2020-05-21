module.exports = {
  getUsers(){
    return db.User.find({})
  },
  getUserById(id){
    return db.User.findOne({id})
  },
  deleteUser(id){
    return db.User.findOneAndRemove({id: id})
  },
  updateUser(id, body){
    return db.User.findOneAndUpdate({id: id}, {"$set":body}, {new: true, useFindAndModify: false})
  },
  deleteUsers(){
    return db.User.remove()
  },
  createUser(body){
    return new db.User({
      id: body.id,
      correo: body.correo,
      password: body.password,
    }).save()
  },
}