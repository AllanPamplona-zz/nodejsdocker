const usersService = require('../services/users')

module.exports = {
  getUsers(req, res){
    usersService.getUsers().then(users => {
      res.json(users)
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  deleteUsers(req, res){
    usersService.deleteUsers().then(() => {
      res.status(204).json('success')
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  createUser(req, res){
    usersService.createUser(req.body).then(student => {
      res.status(200).json('The user was created successfully ')
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  getUserById(req, res){
    usersService.getUserById(req.params.id).then(student => {
      res.json(student)
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  updateUser(req, res){
    usersService.updateUser(req.params.id, req.body).then(student => {
      res.status(202).json('User updated')
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
  deleteUser(req, res){
    usersService.deleteUser(req.params.id).then(() => {
      res.status(204).json('User deleted')
    }).catch(error => {
      res.status(500).json({ error: error.toString()})
    })
  },
}
