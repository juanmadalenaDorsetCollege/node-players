const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

const comparePassword = (plaintext, hash) => {
    return bcrypt.compareSync(plaintext, hash)
}

module.exports = {
    hashPassword, comparePassword
}