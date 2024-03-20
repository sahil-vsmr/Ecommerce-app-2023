import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import { connect } from 'mongoose';
//import connectDB from './config/db';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'
//const colors = require('colors')

//configure env
dotenv.config()

//database config
connectDB()

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('<h1> Welcome to Ecommerce App </h1>');
});

//PORT
const PORT = process.env.PORT || 8080;

//run 
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.black)
});