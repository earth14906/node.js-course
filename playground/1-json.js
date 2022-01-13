const fs = require('fs')
const { json } = require('stream/consumers')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Earth'
user.age = 25

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON) 