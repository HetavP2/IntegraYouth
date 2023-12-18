import express from "express";
import applications from './routes/applications.js';
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import cors from 'cors';
import questions from './routes/questions.js';
import questionAnswers from './routes/questionAnswers.js';

const app = express();

//middleware for parsing req body
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);


//GET HOME ROUTE
app.get('/', (req, res) => {
    return res.status(234).send('WElcome!');
});

// applications route
app.use('/applications', applications);

// questions route
app.use('/questions', questions);

// questionAnswers route
app.use('/questionAnswers', questionAnswers);


//connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('App connected to database');
    app.listen(process.env.API_PORT, () => {
      console.log(`App is listening to port: ${process.env.API_PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });