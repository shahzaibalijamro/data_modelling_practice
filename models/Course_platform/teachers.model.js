import mongoose from "mongoose";

const currentlyTeaching = new mongoose.Schema({
    current: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
}, { _id: false })


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
    },
    gender : {
        type: String,
        enum: ["male","female"],
        required: true
    },
    coursesTeaching : {
        type: [currentlyTeaching],
        default: []
    },
},{timestamps: true});


export const Teacher = mongoose.model("Teacher", teacherSchema);