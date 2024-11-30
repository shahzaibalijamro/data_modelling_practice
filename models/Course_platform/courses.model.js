import mongoose from "mongoose";


const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
},{timestamps:true})


export const Course = mongoose.model("Course",coursesSchema)