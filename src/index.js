//require('dotenv').config({path: '/.env'})
import dotenv from "dotenv";
import connectToMongoDB from "./db/index.js";


dotenv.config({
    path: 'src/.env'
})

connectToMongoDB()















/*
import express from "express";
const app=express()

// Iffy (funcition called on creation), async so that we can use await
;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
        app.on("error", () => {
            console.log("Error", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log("App is listening on:", process.env.PORT);
        })
    } catch (error) {
        console.log(`Error: ${error}`);
        throw err;

    }
})()
*/