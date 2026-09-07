import app from './app.js';
import {connectToDb} from './src/db/connect.js';

// Define the port number for the server to listen on

const PORT = process.env.PORT;

// throw an error if the server fails to read the port

if(!PORT) {
    throw new Error('Port is not defined. Make sure your local npm script reference the .env fie with --env-files= .env, or define PORT in your hosted environment settings.');
}

//connect to database and start server

const startServer = async () =>{
    try {
        await connectToDb();

        app.listen(PORT, () => {
            console.log(`Server is running at 127.0.0.1:${PORT}`);
});
    } catch (error) {

        // log the error message and exit the process if the database fails to connect

        console.error('Failed to connect to the database.', error.message);
        process.exit(1);
    }

};

await startServer();
