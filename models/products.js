const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

//Define book schema
const productSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: false
    }
});

//Export the model
module.exports = mongoose.model('Products', ProductSchema);