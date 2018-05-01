const mongoose = require('mongoose')
mongoose.connect('mongodb://fer2018:mdb2018@ds259079.mlab.com:59079/devf')

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

const itemSchema = new Schema({
    itemId: ObjectId,
    name: String,
    precio_unitario: Number,
    brand: String
})

var Item = mongoose.model('Item', itemSchema)
module.exports = Item