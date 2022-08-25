import express from 'express';
import bookRouter from './resources/books/book.router';

const app = express();
app.use(express.json());
app.use("/book", bookRouter);




app.listen(3000, () => {
    console.log('Server is online on: http://localhost:3000');
});