const mongoose = require('mongoose')
mongoose.connect('mongodb://fer2018:mdb2018@ds259079.mlab.com:59079/devf')

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

const contactoSchema = new Schema({
    contactId: ObjectId,
    mail: String,
    name: String,
    last_name: String,
    mobile: Number

})

var Contacto = mongoose.model('Contacto', contactoSchema)
module.exports = Contacto