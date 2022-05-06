const db = new Map()

class User {
  constructor ({ name, email, gender, isSubscribe }) {
    this.name = name
    this.email = email
    this.gender = gender
    this.isSubscribe = isSubscribe
    this.id = `${db.size + 1}`
    this.createAt = new Date()

    db.set(this.id, this)

    return Promise.resolve(this)
  }

  async delete () {
    return db.delete(this.id)
  }

  async update (values) {
    const oldUser = db.get(this.id)
    const newUser = await new User({
      ...oldUser,
      ...values
    })
    newUser.id = this.id
    db.set(this.id, newUser)
    return newUser
  }
}

User.findOne = async id => {
  return db.get(id)
}
User.findAll = async () => {
  return [...db.values()]
}

module.exports = User
