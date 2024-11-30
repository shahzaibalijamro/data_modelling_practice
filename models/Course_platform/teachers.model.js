import mongoose from "mongoose";


const teacherSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password : {
        type: String,
        required: true,
    },
    gender : {
        type: String,
        enum: ["male","female"]
    },
    coursesteaching : {
        type: String,
        enum: ["teacher","student"]
    },
},{timestamps: true});


export const Teacher = mongoose.model("Teacher", teacherSchema);