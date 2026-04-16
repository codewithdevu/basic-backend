import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    category: {
        type: mongoose.Schema.types.ObjectId,
        ref: "Category"
    },
    owner: {
        type: mongoose.Schema.types.ObjectId,
        ref: "User",
    }
}, {timeStamps: true})

export const Product = mongoose.model("Product" , productSchema) 