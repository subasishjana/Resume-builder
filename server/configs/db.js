

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongodbURI = process.env.MONGODB_URL;

        if (!mongodbURI) {
            throw new Error("MONGODB_URL environment variable is not defined");
        }

        await mongoose.connect(
            `${mongodbURI}/resume-builder?retryWrites=true&w=majority`
        );

        console.log("Database connected successfully");

    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

export default connectDB;