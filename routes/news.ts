import express from "express";
import {NewMutation} from '../types';
import fileDb from '../fileDb';

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
  const news = await fileDb.getNews();
  res.send(news);
});

newsRouter.get('/:id', async (req, res) => {
  const newsId = req.params.id;
  const news = await fileDb.getNewsById(newsId);

  if (!news) {
    return res.status(404).send({"error": "News article not found"});
  }

  res.send(news);
});

newsRouter.post('/', async (req, res) => {
  if (!req.body.title || req.body.content) {
    return res.status(400).send({"error": "Title and content must be present in the request"});
  }

  const tidingData: NewMutation = {
    title: req.body.title,
    content: req.body.content,
    img: req.body.img
  }

  const tiding = await fileDb.addNews(tidingData);

  res.send(tiding);
});

newsRouter.delete('/:id', async (req, res) => {
  const newsId = req.params.id;
  const deletedNews = await fileDb.deleteNewsById(newsId);

  if (!deletedNews) {
    return res.status(404).send({"error": "News article not found"});
  }

  res.send({"message": "News article deleted successfully"});
});

export default newsRouter;