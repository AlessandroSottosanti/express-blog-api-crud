import { postsList } from '../data/postsData.js';
import chalk from 'chalk';


const index =  (req, res) => {

    const tag = req.query.tag;
    let filteredPosts = [];

    if(tag) {
        postsList.forEach(curPost => {
            curPost.tags.forEach(curTag => {
                if (curTag.toLowerCase() === tag.toLowerCase()) {
                    filteredPosts.push(curPost);
                }
            });
        });
    }

    else {
        filteredPosts = postsList;
    }

    res.json(
        {
            postsArray: filteredPosts,
            count: filteredPosts.length
        }
    );
}

const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = postsList.find(curPost => curPost.id === postId);

    if (post) {
        res.json(post); // Restituisce il post se trovato
    } 
    else {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Error 404, post not found :("
        });
        console.error(chalk.red.bold("Error 404, post not found :("));    
    }
}

const create = (req, res) => {
    res.json('aggiungo un nuovo elemento nei miei dati');
}

const update = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = postsList.find(curPost => curPost.id === postId);

    if (post) {
        res.json('modifico un intera risorsa nei miei dati tramite id ' + postId);
    } 
    else {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Error 404, post not found :("
        });
        console.error(chalk.red.bold("Error 404, post not found :("));
    }

}

const modify = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = postsList.find(curPost => curPost.id === postId);

    if (post) {
        res.json('modifico uno o più parametri di una risorsa nei miei dati tramite id ' + postId);
    } 
    else {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Error 404, post not found :("
        });
        console.error(chalk.red.bold("Error 404, post not found :("));
    }
}

const destroy = (req, res) => {
    const postId = parseInt(req.params.id);

    const postIndex = postsList.findIndex(curPost => curPost.id === postId);

    if (postIndex === -1) {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Error 404, post not found :("
        });
        console.error(chalk.red.bold("Error 404, post not found :("));
    } 
    else {
        postsList.splice(postIndex, 1)
        res.sendStatus(204);
    }

}

export default {index, show, create, update, modify, destroy};