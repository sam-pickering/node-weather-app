const request = require('postman-request')

// const url = 'http://api.weatherstack.com/current?access_key=4d7a56fa4f7c2c6c44257856afc497f2&query=wellington&units=m'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service.')
//     } else if (response.body.error) {
//         console.log('Unable to find location.')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.')
//     }
// })

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4d7a56fa4f7c2c6c44257856afc497f2&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback( 'Unable to find location. Try another seach!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast