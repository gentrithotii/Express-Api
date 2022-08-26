import express from 'express';
import booksRouter from './resources/items/Books.router';

const app = express();
app.use(express.json());
app.use("/books", booksRouter);




app.listen(3000, () => {
    console.log('Server is online on: http://localhost:3000');
});