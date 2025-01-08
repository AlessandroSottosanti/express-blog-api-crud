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

    const idTagToDelete = req.id;

    postsList.forEach(post => {
        post.tags.findIndex(tag => {
            tag.id === idTagToDelete;
        });
    });

    idTagToDelete === -1 ? res.status(404).json({ error: "Tag non trovato" }) : res.status(204).json({ success: "Tag rimosso con successo"});
    
}

export default { index, destroy };