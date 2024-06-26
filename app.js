import express from 'express';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import userRouter from './routes/usersRoutes.js';
import noteRouter from './routes/notesRoutes.js';

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(bodyParser.json());

// Define Routes
app.use('/api/users', userRouter);
app.use('/api/notes', noteRouter);

export default app;