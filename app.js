import express from 'express';
import router from './src/router.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' with { type: 'json' };


// Create an instance of the express application

const app = express();


// Middleware to parse incoming JSON requests

app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define a route for the root endpoint

app.get('/', (req, res) =>{
    return res.status(200).json({message: 'Server is running'});
});


export default app;