import mongoose from "mongoose"

const orderItemsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})
const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: String,
        required: true,
    },
    customer: {
        type: mongoose.Schema.types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemsSchema],
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING",
    },
}, { timeStamps: true })

export const Order = mongoose.model("Order", orderSchema)