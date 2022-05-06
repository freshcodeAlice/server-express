const yup = require('yup')

const validateSchema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
  gender: yup.string().required(),
  isSubscribe: yup.boolean()
})

module.exports.validate = async (req, res, next) => {
  const { body } = req

  try {
    req.body = await validateSchema.validate(body)
    next()
  } catch (error) {
    res.status(406).send(error.message)
  }
}
