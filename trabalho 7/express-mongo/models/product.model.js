var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema(
    {
        name: {type: String, required:true, max:100},
        price: {type: String, required:true, max:100},
        qty: {type: Number, required:true, max:100},
    }
);

var ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;