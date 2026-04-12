import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in .env file");
}

if (!process.env.PORT) {
    throw new Error("PORT is not defined in .env file");
}

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in .env file");
}

const config = {
    mongoURI: process.env.MONGO_URI,
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET,
};

export default config;