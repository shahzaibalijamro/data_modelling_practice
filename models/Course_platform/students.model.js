import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
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
    enrolledcourses : {
        type: String,
        enum: ["teacher","student"]
    },
},{timestamps: true});


export const Student = mongoose.model("Student", studentSchema);