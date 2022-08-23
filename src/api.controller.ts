import { NextFunction, Request, Response } from "express";


export const getAllOjects = (req: Request, res: Response) => {
res.status(200).json('Hello World')};


export const createObject = (req: Request, res: Response) => {
    const data = req.body;
    // todo save to db or generate id and save to server
    console.log(data);
    res.status(201).json(data)};


export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.path);
    next();
}

