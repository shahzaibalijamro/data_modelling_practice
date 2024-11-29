import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
})


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    Category: {
        type: [categorySchema],
        default: [{name : "Default Category"}]
    },
    stock: {
        type: Number,
        default: 0
    }
},{timestamps: true});

export const Product = mongoose.model("Product",productSchema);