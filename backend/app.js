import express  from 'express';
import dbConnection from './Database/Database.js';
import dotenv from 'dotenv';
import UserRoute from './Routes/UserRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors' ;

const app = express();
app.use(express.json({
    limit : '50mb'
}));

dotenv.config();
dbConnection();

app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());

// deployed url added
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials :true
}))

app.use('/api', UserRoute)

const PORT = 5000;
app.listen(PORT , () => {
    console.log('Port is running -',PORT);
})