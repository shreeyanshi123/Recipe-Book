import express, { urlencoded } from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import reservationRouter from './routes/reservationRoute.js';

const app=express()
dotenv.config({path:"./config/config.env"})
import { errorMiddleware } from './error/error.js';
app.use(
    cors({
        origin:[process.env.FRONTEND_URL],
        methods:["POST","PUT","DELETE","GET"],
        credentials:true,
    })
);


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter)


dbConnection();

app.use(errorMiddleware);
export default app;