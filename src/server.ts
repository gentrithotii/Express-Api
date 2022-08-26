import express from 'express';
import itemsRouter from './resources/items/Books.router';

const app = express();
app.use(express.json());
app.use("/items", itemsRouter);




app.listen(3000, () => {
    console.log('Server is online on: http://localhost:3000');
});