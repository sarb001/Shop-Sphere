import express  from 'express';
import dbConnection from './Database/Database.js';
import dotenv from 'dotenv';
import UserRoute from './Routes/UserRoute.js';

const app = express();

app.use(express.urlencoded({ extended : true }));

app.use(express.json({
    limit : '50mb'
}));
app.use('/api', UserRoute)


dotenv.config();
dbConnection();

const PORT = 5000;
app.listen(PORT , () => {
    console.log('Port is running -',PORT);
})