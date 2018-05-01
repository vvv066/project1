const URL = 'http://localhost:3000/store/items'
const request = require('request')

const creaContactos = (mail, name, lastName, number) => {
    let jsonSend = {
        mail: mail,
        name: name,
        last_name: lastName,
        mobile: number
    }
    return new Promise((resolve, reject) => {
        request.post({ url: URL, form: jsonSend }, (error, status, body) => {
            console.log(status.statusCode)
            let json = JSON.parse(body)
            console.log(json.name)
            console.log(json)
            resolve(json['_id'])

        })
    })
}

for (var i = 201; i <= 301; i++) {
    let mail = `user${i}@mail.com`
    let name = 'Mary' + i
    let lastName = 'Curie' + i
    let mobile = 55555500 + i
    creaContactos(mail, name, lastName, mobile)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}