const users = []

module.exports.createUser = (req, res, next) => {
  const { body: user } = req
  user.id = users.length
  user.createdAt = new Date()
  delete user.password
  users.push(user)
  res.send(users)
}
