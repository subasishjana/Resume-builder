import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on("connected", ()=>{
            console.log("Database connected successfully")});
            
        
        let mongodbURI = process.env.MONGODB_URL
        const projectName = "resume-builder";

        if(!mongodbURI){
            throw new Error ("MONGODB_URI environment variable not send")
        }

        if(mongodbURI.endsWith('/')){
            mongodbURI = mongodbURI.slice(0, -1)
        }

        // await mongoose.connect(`${mongodbURI}/${projectName}`)
        await mongoose.connect(`${process.env.MONGODB_URL}/resume-builder?retryWrites=true&w=majority`);

    }catch(error){
        console.error("Error connecting to MongoDB:", error )
    };
    
}

export default connectDB;