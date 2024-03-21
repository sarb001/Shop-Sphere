import express  from 'express';
import dbConnection from './Database/Database.js';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());
dotenv.config();

dbConnection();
const PORT = 5000;

app.listen(PORT , () => {
    console.log('Port is running -',PORT);
})