require('../src/db/mongoose')
const User = require('../src/models/user')
//61dceee831f994c36f02018a

User.findByIdAndUpdate('61dfa4d1c753f60d7eb81be4', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('61dfa4d1c753f60d7eb81be4', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})