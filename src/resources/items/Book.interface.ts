export interface Book {
  name: string;
  price: number;
  description: string;
}

export interface Item extends Book {
  id: number;
}