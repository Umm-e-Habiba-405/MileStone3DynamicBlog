import mongoose from "mongoose";
 export const connectDB = async()=> {
    await mongoose.connect('mongodb+srv://ummehabibah61:007007007@cluster0.rzwwa.mongodb.net/blog-app')
    console.log('DB Connected')
}
