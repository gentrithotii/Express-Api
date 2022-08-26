import { Book, Item } from "./Book.interface";
import { Items } from "./Books.interface";

/**
 * In-Memory Store
 */

let items: Items = {
  1: {
    id: 1,
    name: "Picaso",
    price: 599,
    description: "berry good",
  },
  2: {
    id: 2,
    name: "Davinqi",
    price: 539,
    description: "Cheesy",
  },
  3: {
    id: 3,
    name: "Skenderbeg",
    price: 10000,
    description: "Woooawww",
   
  }
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: Book): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (
  id: number,
  itemUpdate: Book
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};