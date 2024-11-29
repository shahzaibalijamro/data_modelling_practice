import mongoose from "mongoose";


const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    slug: {
        type: String,
        lowercase: true,
    },
    description : {
        type: String,
    }
});


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    tags: {
        type: [tagSchema],
        default: [{name: "Trending",slug: "trending",description: "currently popular and in high demand."}]
    }
},{timestamps: true})


export const Post = mongoose.model("Post",postSchema)