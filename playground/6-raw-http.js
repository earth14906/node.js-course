const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=1015c630f6f4951672c795fcb13f24c3&query=45,-75&units=m'

const request = http.request(url,(Response) => {
    let data = ''

    Response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)

    })
    Response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)

    })

})
request.on('error', (error) => {
    console.log('An error', error)
})

request.end()