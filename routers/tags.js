import express from 'express';
import tagController from '../controllers/tagController.js';
import checkTag from '../middlewares/checkTagExists.js';
const router = express.Router();

// index tags
router.get('/', tagController.index);


// destroy
 router.delete('/', checkTag.checkTagExists, tagController.destroy);


export default router;

