import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log('Mongodb connected!', connect.connection.host);
    } catch (err) {
        console.log('Mongodb connection Error', err);
        process.exit(1)
    }
}

export default connectDB