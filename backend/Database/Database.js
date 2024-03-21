import mongoose from "mongoose";

export default async function dbConnection(){
    await  mongoose.connect(process.env.MONGODB_URI, {
        dbName : process.env.DB_NAME
    }).then((con) => console.log('mongodb Connected'))
    .catch((err) => console.log('error => ',err));
}