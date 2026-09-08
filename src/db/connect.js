import {MongoClient} from 'mongodb';

let database;

//function to connect to the database in mongoDB

const connectToDb = async () => {
    
    // Check if the connection string is provided
    const connectionString = process.env.MONGODB_URI;
    if(!connectionString){
        throw new Error('MONGODB_URI is required.');
    }
    
    //create a new MongoClient
    const client = new MongoClient(connectionString);
    await client.connect();
    database = client.db(process.env.MONGODB_DB_NAME || 'cse341-books-db');

};

//function to get database error if not connected

const getDb = () => {
    if(!database) {
        throw new Error('Database not connected. Call connectToDb first.');
    }
    return database;
};

export {connectToDb, getDb};