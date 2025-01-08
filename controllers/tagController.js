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

// modify - aggiorna un post (rimuove un tag da un post)
const update = (req, res) => {
    const { postId, tagToRemove } = req.body;  // { postId, tagToRemove }
    
    const post = postsList.find(post => post.id === postId);
    
    if (!post) {
        return res.status(404).json({ error: `Post con ID ${postId} non trovato` });
    }

    const tagIndex = post.tags.findIndex(tag => tag.toLowerCase() === tagToRemove.toLowerCase());

    if (tagIndex === -1) {
        return res.status(404).json({ error: `Tag '${tagToRemove}' non trovato nel post` });
    }

    // Rimuove il tag dall'array
    post.tags.splice(tagIndex, 1);

    // Rispondi con il post aggiornato
    res.status(200).json({ success: `Tag '${tagToRemove}' rimosso dal post`, post });
}

    export default { index, destroy, update };