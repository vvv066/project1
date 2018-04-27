const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Contacto = require('./mongo')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Post para guardar un contacto
app.post('/sales/contacts/create', (req, res) => {
    const { mail, name, last_name, mobile } = req.body
    let newContact = Contacto({
        mail,
        name,
        last_name,
        mobile
    })
    newContact.save((err, contacto) => {
        if (err) throw err
        res.status(201).send(contacto)
    })
})

//Get para obtener información
app.get('/sales/contacts/view', (req, res) => {
    Contacto.find().exec().then(contactos => {
        res.send(contactos)
    }).catch(err => {
        res.status(400).send(err)
    })
})


app.listen(3000, () => {
    console.log('Server on 3000')
})