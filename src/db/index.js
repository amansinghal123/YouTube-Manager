import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToMongoDB = async () => {
    try {
        const mongoDBConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Mongo DB Connected! DB Host is: ${mongoDBConnectionInstance.connection.host}`)
    } catch (error) {
        console.log(`Mongo DB connection Failed: ${error}`)
        throw error
        process.exit(1)
    }

}

export default connectToMongoDB