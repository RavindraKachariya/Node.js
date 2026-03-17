import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        let db = mongoose.connect(process.env.MONGODB_URI)
        console.log("MongooDB Connected");
    } catch (err) {
        console.log("Mongoodb connection error", err);
    }
}

export default connectDB