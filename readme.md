# Esercizio Routing CRUDs APIs per un Blog

Questo progetto implementa un set di API per gestire un blog utilizzando **Express.js**. Le operazioni CRUD (Create, Read, Update, Delete) sono applicate su una lista di post, con il supporto del modulo **Chalk** per il logging colorato.

---

## Dati

I dati sono definiti in `postsData.js` come un array di oggetti, ciascuno rappresentante un post con le seguenti proprietà:

- **id**: identificatore univoco del post.
- **title**: titolo del post.
- **content**: contenuto del post.
- **image**: immagine associata al post.
- **tags**: array di stringhe che rappresentano i tag del post.

## Esecuzione


### Struttura del Codice

### app.js :

- **Importa Express e Chalk**: Utilizza `express` per creare il server e `chalk` per i log colorati.
- **Importa il router `postsRouter`**: Gestisce le rotte relative ai post.
- **Imposta la cartella `public`**: Rende la cartella `public` accessibile per file statici.
- **Utilizza il router `postsRouter`**: Gestisce tutte le rotte che iniziano con `/posts`.
- **Avvia il server**: Il server è in ascolto sulla porta 3000.

### posts.js :

- **Crea un router con Express**: Gestisce le rotte per i post.
- **Rotte principali**:
  - **GET `/posts`**: Restituisce tutti i post con il conteggio totale.
  - **GET `/posts/ricerca?title=xyz`**: Filtra i post in base al titolo.
  - **GET `/posts/:id`**: Restituisce un post specifico per ID.
  - **POST `/posts`**: Simula la creazione di un nuovo post.
  - **PUT `/posts/:id`**: Simula l'aggiornamento completo di un post.
  - **PATCH `/posts/:id`**: Simula l'aggiornamento parziale di un post.
  - **DELETE `/posts/:id`**: Simula l'eliminazione di un post.

### postsData.js :

- **Dati statici dei post**: La lista `postsList` contiene i dati di esempio dei post, con ID, titolo, contenuto, immagine e tag.


## Output

### Esempio di post:

```js
{
    id: 1,
    title: "10 Tips for Learning JavaScript",
    content: "JavaScript is a versatile language used for both frontend and backend development. Here are 10 tips to help you learn it more effectively.",
    image: "javascript.jpeg",
    tags: ["JavaScript", "Programming", "Web Development", "Tips"]
}

