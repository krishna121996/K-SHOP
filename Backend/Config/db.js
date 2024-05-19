import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://krishnaprasath00:zczekMDQoERW7F3z@cluster0.rj1dszn.mongodb.net/kshop-project-db').then(() => {
        console.log('DB connected')
    })
}