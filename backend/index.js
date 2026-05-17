import express, { response } from "express"
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js"
import { Book } from "./models/bookmodel.js";
import booksRoutes from './routes/booksRoutes.js'
import cors from 'cors'

const app = express();
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.use('/books', booksRoutes)


mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("App is connected to database");
        app.listen(PORT, () => {
            console.log(`Port is Running:${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error)
    });
