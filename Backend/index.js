import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from 'cors'
const app = express()
app.use(cors());
app.use(express.json()); 
dotenv.config(); 
const Port = process.env.Port || 4000;
//connecting to monoDb
const URI=process.env.mongoDbURI;
try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
  console.log('Connected to mongoDB')
} catch (error) {
  console.log('Error :',error)
}

//defining routes
app.use('/book',bookRoute)
app.use('/user',userRoute)


app.listen(Port, () => {
  console.log(` Server islistening on port ${Port}`)
})