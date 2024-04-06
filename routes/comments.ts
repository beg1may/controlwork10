import express from "express";
import {CommentMutation, New} from '../types';
import fileDb from '../fileDb';

const commentRouter = express.Router();

commentRouter.post('/', async (req, res) => {
  const { news_id, author, text } = req.body;

  if (!news_id || !text) {
    return res.status(400).send({"error": "News ID and text must be present in the request"});
  }

  const commentData: CommentMutation = {
    news_id: news_id,
    author: author || "Anonymous",
    text: text
  };

  const comment = await fileDb.addComment(commentData);

  res.send(comment);
});

commentRouter.delete('/:id', async (req, res) => {
  const newsId = req.params.id;
  const deletedNews = await fileDb.deleteNewsById(newsId);

  if (!deletedNews) {
    return res.status(404).send({"error": "News article not found"});
  }

  res.send({"message": "News article deleted successfully"});
});

export default commentRouter;