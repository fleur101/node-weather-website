const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/aba2d85b8586c8550d0004ebad88ad93/' + latitude + ',' + longitude + '?units=si'
    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect to server!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + " chance of rain.")
        }
    })
}

module.exports = forecast