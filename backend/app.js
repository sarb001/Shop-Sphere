import express  from 'express';
import dbConnection from './Database/Database.js';
import dotenv from 'dotenv';
import UserRoute from './Routes/UserRoute.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json({
    limit : '50mb'
}));

dotenv.config();
dbConnection();

app.use(express.urlencoded({ extended : true }));

app.use(cookieParser());
app.use('/api', UserRoute)

const PORT = 5000;
app.listen(PORT , () => {
    console.log('Port is running -',PORT);
})