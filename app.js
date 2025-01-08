import express from 'express';
import chalk from 'chalk';
import postsRouter from './routers/posts.js';
import tagsRouter from './routers/tags.js';
import handleErrors from './middlewares/handleError.js';
import notFoundPage from './middlewares/notFoundRoute.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:5173'
    }))


// cartella public visibile a tutti
app.use(express.static("public"));

// usiamo le rotte per i posts
app.use('/posts', postsRouter);

app.use('/tags', tagsRouter);



app.get('/', (req, res) => {
    res.json('ciao mondo');
});

app.use(notFoundPage.notFoundRoute);

app.use(handleErrors.handleError);


// porta in ascolto
app.listen(port, () => {
    console.log(chalk.green.bold(`Server is listening in localhost:${port}.`));
});

