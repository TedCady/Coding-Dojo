const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [3, 'Title must be at least 3 characters long']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0.01, 'Product cannot be free']
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [3, 'Description must be at least 3 characters long']
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);
