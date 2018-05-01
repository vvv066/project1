const URL = 'http://localhost:3000/store/items'
const request = require('request')

//Obtiene artículos
const getItems = () => {
    return new Promise((resolve, reject) => {
        request.get(URL,
            (error, response, body) => {
                console.log(response.statusCode)
                let json = JSON.parse(body)
                resolve(json)
            })
    })
}

var articulos = getItems()
    .then(response => {
        console.log(response)
        console.log(response.length)
    })
    .catch(err => {
        console.log(err)
    })