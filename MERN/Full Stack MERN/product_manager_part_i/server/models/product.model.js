const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);
