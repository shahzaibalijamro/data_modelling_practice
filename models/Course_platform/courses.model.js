import mongoose from "mongoose";

const enrolledSchema = new mongoose.Schema({
    studentId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }
}, { _id: false })

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true
    },
    studentsEnrolled: {
        type: [enrolledSchema],
        default: []
    }
}, { timestamps: true })


export const Course = mongoose.model("Course", coursesSchema)