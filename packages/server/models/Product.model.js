const mongoose = require('mongoose')
const schema = mongoose.Schema;

//create schema
const productSchema = new schema({

    id: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    like:{
        type:Boolean
    }
})

//create model
const product = mongoose.model('product', productSchema);
module.exports = product;