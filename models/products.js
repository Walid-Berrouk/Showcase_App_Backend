const mongoose = require("mongoose")

let Schema = mongoose.Schema

let ProductSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
})


// This creates our model from the above schema, using mongoose's model method
let Product = mongoose.model("Product", ProductSchema);

// Export the Article model
module.exports = Product;