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

//Delete para borrar información
app.delete('/sales/contacts/:cid', (req, res) => {
    const { cid } = req.params
    Contacto.findByIdAndRemove(cid).exec().then(
        contacto => res.send({ message: "Contacto borrado" })
    ).catch(err => res.send(err))
})


//Patch para actualizar la información
app.patch('/sales/contacts/:cid', (req, res) => {
    const { cid } = req.params
    Contacto.findByIdAndUpdate(cid, req.body, (err, contacto) => {
        Contacto.findByIdAndUpdate(cid).exec()
            .then(contact1 => res.send(contact1))

    }).catch(err => res.send(err))
})

//find para los queries
// sales/contacts/name=contactName
app.get('/sales/find', (req, res) => {
    const { nombre } = req.query
    Contacto.find({ name: nombre }).exec()
        .then(contactos => res.send(contactos))
        .catch(err => res.send(err))
})

app.listen(3000, () => {
    console.log('Server on 3000')
})