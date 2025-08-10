import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDB from "./db.js";
const PORT = process.env.PORT || 8080;
import userRoutes from "./routes/userRoutes.js";
app.use(express.json());

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
    res.send('products api running new deploy');
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

app.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})
