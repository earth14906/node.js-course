const request = require ('request')
const geocode = require ('./utils/geocode')
const forecast = require ('./utils/forecast')

// const url = 'http://api.weatherstack.com/current?access_key=1015c630f6f4951672c795fcb13f24c3&query=37.8267,-122.4233&units=m'

// request({ url: url, json: true }, (error,response) => {
// //     // const deta = JSON.parse(response.body.current)
// //     // console.log(data.current)
// //     // console.log(response.body.current)
//     if (error){
//         console.log('Connect Network!')
//     }else if (response.body.error) {
//         console.log('Unable to find location')

//     }else { 
//         console.log(response.body.current.weather_descriptions[0] + '. It is currentl', response.body.current.temperature,'degress out. It feel like ',
//         response.body.current.feelslike,'degree out')
//     }
// })
    
const address = (process.argv[2])

if (!address) {
    console.log('Please provide an address!')
}else{
    geocode(address, (error, {latitude, longtitude, location} = {}) => {

        if (error){
            return console.log(error)
        }
        
        forecast(latitude, longtitude, (error, forecastData) =>{
    
            if(error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })

}


