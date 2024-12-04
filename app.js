import express from 'express';
import chalk from 'chalk';
import postsRouter from './routers/posts.js';

const app = express();
const port = 3000;

// cartella public visibile a tutti
app.use(express.static("public"));

// usiamo le rotte per i posts
app.use('/posts', postsRouter);

// porta in ascolto
app.listen(port, () => {
    console.log(chalk.green.bold(`Server is listening in localhost:${port}.`));
});

