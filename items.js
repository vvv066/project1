const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Item = require('./mongoItems')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Post para guardar un contacto
app.post('/store/item/create', (req, res) => {
    const { name, precio_unitario, brand } = req.body
    let newItem = Item({
        name,
        precio_unitario,
        brand
    })
    newItem.save((err, item) => {
        if (err) throw err
        res.status(201).send(item)
    })
})


//Get para obtener información
app.get('/store/items', (req, res) => {
    Item.find().exec().then(items => {
        res.send(items)
    }).catch(err => {
        res.status(400).send(err)
    })
})


//Delete para borrar información
app.delete('/store/items/:id', (req, res) => {
    const { id } = req.params
    Item.findByIdAndRemove(id).exec().then(
        item => res.send({ message: "Item borrado" })
    ).catch(err => res.send(err))
})


//Patch para actualizar la información
app.patch('/store/items/:id', (req, res) => {
    const { id } = req.params
    Item.findByIdAndUpdate(id, req.body, (err, contacto) => {
        Item.findByIdAndUpdate(id).exec()
            .then(item1 => res.send(item1))

    }).catch(err => res.send(err))
})


//find para los queries
// sales/contacts/name=contactName
app.get('/store/find', (req, res) => {
    const { nombre } = req.query
    Contacto.find({ name: nombre }).exec()
        .then(items => res.send(items))
        .catch(err => res.send(err))
})


app.listen(3000, () => {
    console.log('Server on 3000')
})