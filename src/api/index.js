import express from 'express';
import serverless from 'serverless-http';
const app = express();
import dotenv from 'dotenv';
import connectDB from "../../db.js";
const PORT = process.env.PORT || 8080;
import userRoutes from "../../routes/userRoutes.js";
import bookRoutes from "../../routes/bookRoutes.js";

// In your server.js or index.js
import cors from'cors';

app.use(cors()); 

app.use(express.json());

// Load environment variables
dotenv.config();

await connectDB('bookstore');

app.get('/', (req, res) => {
    res.send('API is running...');
});
app.get('/ping', (req, res) => {
    res.send('<=PONG=>');
});
app.get('/country', (req, res) => {
    res.send('<=INDIA=>');
});

app.get('/ping', (req, res) => {
    res.send('PONG')
});

// /users
app.use('/user', userRoutes);
app.use("/book", bookRoutes);

app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})

export const handler = serverless(app);