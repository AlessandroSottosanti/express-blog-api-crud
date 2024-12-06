import { postsList } from '../data/postsData.js';
import chalk from 'chalk';


const checkPostExists = (req, res, next) => {
    const postId = parseInt(req.params.id);
    const post = postsList.find((curPost) => curPost.id === postId);


    const message = "Resource not found :(";

    if(post){
        next();
    }
    else {
        res.status(404).json({
            error: true,
            message
        });
        console.error(chalk.red.bold(message));
    }
}

export default { checkPostExists };