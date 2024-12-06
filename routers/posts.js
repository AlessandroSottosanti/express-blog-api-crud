import express from 'express';
import postController from '../controllers/postController.js';
import checkPost from '../middlewares/checkPostExists.js';
const router = express.Router();

// index posts
router.get('/', postController.index);

// show
router.get('/:id', checkPost.checkPostExists , postController.show);

// store 
router.post('/', checkPost.checkPostExists,  postController.create);

// update
router.put('/:id', checkPost.checkPostExists, postController.update);

// modify
router.patch('/:id', checkPost.checkPostExists, postController.modify);

// destroy
router.delete('/:id', checkPost.checkPostExists, postController.destroy);


export default router;

