import express from 'express';
import postController from '../controllers/postController.js';

const router = express.Router();

// index posts
router.get('/', postController.index);

// create 
router.post('/', postController.create);

// show
router.get('/:id', postController.show);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', postController.modify);

// destroy
router.delete('/:id', postController.destroy);


export default router;

