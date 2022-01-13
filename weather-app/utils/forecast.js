const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1015c630f6f4951672c795fcb13f24c3&query='
    + latitude + ',' + longtitude + '&units=m'
    request({ url, json: true}, (error,{ body}) => {
        if (error) {
            callback('Unable to connect!', undefined)
        }else if(body.error){
            callback('Unable to find location!', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currentl ' + body.current.temperature +' degress out. It feel like '+
                body.current.feelslike + ' degree out') 
        }
    })
}

module.exports = forecast