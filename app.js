import express from 'express';
import router from './src/router.js';


// Create an instance of the express application

const app = express();

// Middleware to parse incoming JSON requests

app.use(express.json());
app.use(router);

// Define a route for the root endpoint

app.get('/', (req, res) =>{
    return res.status(200).json({message: 'Server is running'});
});


export default app;