require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('61dd091a681e2bac39000345').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed : false})
    return count
}

deleteTaskAndCount('61dfa825aa76284e0431d856').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})