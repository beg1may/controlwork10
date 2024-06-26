import express from 'express';
import cors from "cors";
import newsRouter from "./routes/news";
import fileDb from './fileDb';
import commentsRouter from './routes/comments';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/news', newsRouter);
app.use('/comments', commentsRouter);

const run = async () => {
  await fileDb.init()
  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
}

void run();

