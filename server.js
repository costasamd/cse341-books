import app from './app.js';

// Define the port number for the server to listen on

const PORT = process.env.PORT;

// throw an error if the server fails to read the port

if(!PORT) {
    throw new Error('Port is not defined. Make sure your local npm script reference the .env fie with --env-files= .env, or define PORT in your hosted environment settings.');
}

app.listen(PORT, () => {
    console.log(`Server is running at 127.0.0.1:${PORT}`);
});

