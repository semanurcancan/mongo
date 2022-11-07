import mongoose, { Model } from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true,
    },
})


//yukarıdaki şemayı kullanarak dataBase modeli oluşturuyoruz aşağıda. modeli oluşturduk.
const Post = mongoose.model('post', postSchema)

export default Post