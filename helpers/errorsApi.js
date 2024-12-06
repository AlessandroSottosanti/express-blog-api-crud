import chalk from 'chalk';

export const send404Error = (res, message = "Resource not found") => {
    res.status(404).json({
        error: true,
        message
    });
    console.error(chalk.red.bold(message));
};
