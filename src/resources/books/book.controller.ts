import { NextFunction, Request, Response } from "express";
import { books } from "../models/book.type";



export const getAllBooks = (req: Request, res: Response) => {
res.status(200).json([books])};

export const updateBookById = (req: Request, res:Response) =>{
    res.status(200).json()
}


export const createBook = (req: Request, res: Response) => {
    const data = req.body;
    // todo save to db or generate id and save to server
    console.log(data);
    res.status(201).json(data)};


export const deleteBookById = (req: Request, res: Response) =>{
    //Delete Book
    res.status(204).json(null);
};