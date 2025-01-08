import { postsList } from '../data/postsData.js';
import chalk from 'chalk';

const checkTagExists = (req, res, next) => {
    next();

}


export default { checkTagExists };