const mongoose = require('mongoose')
// const validate = require('validator')
mongoose.connect(process.env.MONGODB_URL, { 
    useNewUrlParser: true,
    // useCreatdIndex: true,
    // useFindAndModify: false
})


// const them = new account({
//     name: 'Earth',
//     age: 25
// })

// const me = new account({
//     name: 'Andrew',
//     email: 'earth@mead.io'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// them.save().then(() => {
//     console.log(them)
// }).catch((error) => {
//     console.log('Error', error)
// })

