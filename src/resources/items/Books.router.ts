import express, { Request, Response } from "express";
import * as ItemService from "./Books.service";
import { Book, Item } from "./Book.interface";


//   Router 
 
export const itemsRouter = express.Router();


/**
 * Controllers
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {

    const items: Item[] = await ItemService.findAll();

    if(items.length === null ){

       res.status(404).send("No items")
      
    }else{
      res.status(200).send(items);
    }
  

});

// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
   const id: number = parseInt(req.params.id, 10);
   const item: Item = await ItemService.find(id);
    
   if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");

});

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
  
    const item: Book = req.body;
    const newItem = await ItemService.create(item);

    res.status(201).json(newItem);
    
});

// PUT items/:id

itemsRouter.put("/:id", async (req: Request, res: Response) => {
    
  const id: number = parseInt(req.params.id, 10);
  const itemUpdate: Item = req.body;

  const existingItem: Item = await ItemService.find(id);

  if (existingItem) {
    const updatedItem = await ItemService.update(id, itemUpdate);
    return res.status(200).json(updatedItem);
    }
    else{
      return res.status(404).send("Nothing with that id exists");
    }
  
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {

    const id: number = parseInt(req.params.id, 10);
    const existingItem: Item = await ItemService.find(id);

    if(existingItem){
      await ItemService.remove(id);

      res.status(200).json("The book has been Deleted");
    }
    else{
      return res.status(404).json("Nothing with that id exists");
    }
});


export default itemsRouter;
