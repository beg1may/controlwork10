// import express from "express";
// import { CommentMutation} from '../types';
// import fileDb from '../fileDb';
//
// const commentRouter = express.Router();
//
// commentRouter.get('/', async (req, res) => {
//   const comment = await fileDb.getNews();
//   res.send(comment);
// });
//
// commentRouter.post('/', async (req, res) => {
//   if (!req.body.title || req.body.content) {
//     return res.status(400).send({"error": "Title and content must be present in the request"});
//   }
//
//   const commentData: CommentMutation = {
//     author: req.body.author,
//     text: req.body.text,
//   }
//
//   const tiding = await fileDb.addComment(commentData);
//
//   res.send(tiding);
// });
//
// commentRouter.delete('/:id', async (req, res) => {
//   const newsId = req.params.id;
//   const deletedNews = await fileDb.deleteNewsById(newsId);
//
//   if (!deletedNews) {
//     return res.status(404).send({"error": "News article not found"});
//   }
//
//   res.send({"message": "News article deleted successfully"});
// });
//
// export default commentRouter;