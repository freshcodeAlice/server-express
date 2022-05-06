const express = require('express')
const PORT = 3000
const app = express()
const { validate: validateBody } = require('./middlewares/validate.mw')
const UserController = require('./controllers/user.controller')

const bodyParser = express.json()

app.get('/users', UserController.getAllUsers)
app.get('/user/:id', UserController.getSingleUser)
app.post('/users', bodyParser, validateBody, UserController.createUser)
app.put('/user/:id', bodyParser, validateBody, UserController.updateUser)
app.delete('/user/:id', UserController.deleteUser)

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`)
})
