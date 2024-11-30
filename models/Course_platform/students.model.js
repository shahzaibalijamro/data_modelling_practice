import mongoose from "mongoose";

const enrolledSchema = new mongoose.Schema({
    courseId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
}, { _id: false })

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
        lowercase: true,
        validate: {
            validator: function (value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `Invalid email this mate : ${props.value}`
        }
    },
    password : {
        type: String,
        required: true,
        minlength: 6
    },
    gender : {
        type: String,
        enum: ["male","female"],
        required : true
    },
    enrolledCourses : {
        type: [enrolledSchema],
        default: []
    }
},{timestamps: true});


export const Student = mongoose.model("Student", studentSchema);