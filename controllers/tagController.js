import { postsList } from '../data/postsData.js';

// index
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

// destroy
const destroy = (req, res) => {

    const tagToDelete = req.query.tag?.toLowerCase();
    let tagFound = false;

    postsList.forEach(post => {
        // Trova l'indice del tag nell'array dei tag del post
        const tagIndex = post.tags.findIndex(tag => tag.toLowerCase() === tagToDelete);
        if (tagIndex !== -1) {
            post.tags.splice(tagIndex, 1);
            tagFound = true;
        }
    });

    if (!tagFound) { 
        res.status(404).json({ error: `Tag '${tagToDelete}' non trovato` }) ;
    }
    else {
        res.status(201).json({ success: `Tag '${tagToDelete}' rimosso con successo` });
    }

}

    export default { index, destroy };