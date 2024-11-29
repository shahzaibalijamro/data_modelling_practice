import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: ({value}) => `${value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
},{timestamps: true});

export const User = mongoose.model("User",userSchema);