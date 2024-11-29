import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        default: 1
    }
})


const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true 
    },
    products: {
        type: [orderItemsSchema],
    },
    status: {
        type: String,
        enum: ["Processing","Delivering","Delivered"],
        required: true,
        default: "Processing"
    },
},{timestamps: true});

export const Order = mongoose.model("Order",orderSchema);