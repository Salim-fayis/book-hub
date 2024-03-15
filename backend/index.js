import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./confiq.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors"
const app = express();

app.use(express.json());

app.use(cors())

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome To MERN Stack Tutorial')
})


app.use('/books',booksRoute)



mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });