import { postsList } from '../data/postsData.js';


const index = (req, res) => {

    const tagsArray = []

    postsList.forEach(post => {
        post.tags.forEach(tag => {

            !tagsArray.includes(tag.toLocaleLowerCase()) &&
            tagsArray.push(tag.toLowerCase()); // Aggiunge i tag in minuscolo
        });
    });
   
    // ordinamento alfabetico
    tagsArray.sort();


    // json dei tag con conteggio
    res.json({
        tags: tagsArray,
        count: tagsArray.length,
    });

}

export default { index };