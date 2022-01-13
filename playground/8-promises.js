// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         // resolve([7,4,1])
//         reject('Things went wrong!')
//         // resolve([2,3,2])
//         // reject('New Error!')
//     },4000)
// })

const { rejects } = require("assert")
const { resolve } = require("path/posix")

// doWorkPromise.then((result) => {
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// ep.93
const add = (a,b) => {
    return new Promise((resolve,rejects) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
    })
}

// add(1, 2).then((sum) => {
//     console.log(sum)

//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})