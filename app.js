import express from 'express';

// Create an instance of the express application

const app = express();

// Middleware to parse incoming JSON requests

app.use(express.json());

// Define a route for the root endpoint

app.get('/', (req, res) =>{
    return res.status(200).json({message: 'Server is running'});
});

export default app;