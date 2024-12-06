import express from 'express';
import chalk from 'chalk';
import postsRouter from './routers/posts.js';
import handleErrors from './middlewares/handleError.js';

const app = express();
const port = 3000;

app.use(express.json());


// cartella public visibile a tutti
app.use(express.static("public"));

// usiamo le rotte per i posts
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.json('ciao mondo');
});

app.use(handleErrors.handleError);


// porta in ascolto
app.listen(port, () => {
    console.log(chalk.green.bold(`Server is listening in localhost:${port}.`));
});

