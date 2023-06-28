import express from 'express';
import dotenv from 'dotenv';
import jobsRouter from './routes/jobs-router.js';
import jobsDetailsRouter from './routes/jobs-details-router.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/search', jobsRouter);
app.use('/job-details', jobsDetailsRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})

