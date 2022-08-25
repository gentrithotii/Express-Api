import express from 'express';
import { createBook, getAllBooks, deleteBookById, updateBookById } from './book.controller';

const bookRouter = express.Router();
bookRouter.get("/", getAllBooks);
bookRouter.post("/", createBook);
bookRouter.put("/:id", updateBookById);
bookRouter.delete("/:id", deleteBookById);


export default bookRouter;
