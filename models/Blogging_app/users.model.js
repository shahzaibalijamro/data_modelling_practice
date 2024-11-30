import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        lowercase : true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase : true,
        unique: true,
        validate: {
            validator : function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.v} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        // assuming that i host the image on cloudinary and push the url in return
        type: String,
        default: "https://static.vecteezy.com/system/resources/previews/009/292/244/large_2x/default-avatar-icon-of-social-media-user-vector.jpg"
    }
},{timestamps: true})


export const User = mongoose.model("User",userSchema)