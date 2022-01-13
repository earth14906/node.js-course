// setTimeout(() => {
//     console.log('2 second are up')
// }, 2000
// )

// const names = ['Andrew','Jen','Jess']
// const shortname = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {
//    setTimeout(() =>{
//    const data = {
//     latitude: 0,
//     longtitude: 0
//     }
//     callback(data)
//     },2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

//test 
// const add = (a, b, callback) => {
//     setTimeout(() => {
//         callback(a + b)
//     },2000)
// }

// add(1,4,(sum) => {
//     console.log(sum)
// })

// Ep79.

const doWorkCallback = (callback) => {
setTimeout(() => {
    // callback('This is my error!', undefined)
    callback(undefined, [1,4,7])
}, 2000)

}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})


