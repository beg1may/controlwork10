import express from "express";
import {NewMutation} from '../types';
import fileDb from '../fileDb';

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
  const queryDate = req.query.datetime
  res.send('hello');
});

newsRouter.post('/', async (req, res) => {
  const tidingData: NewMutation = {
    title: req.body.title,
    content: req.body.content,
    img: req.body.img,
    datetime: req.body.datetime,
  }

  const tiding = await fileDb.addNews(tidingData);

  res.send(tiding);
});

export default newsRouter;