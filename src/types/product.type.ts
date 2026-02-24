export type Category =
  | 'Meals'
  | 'Juices'
  | 'Burgers'
  | 'Pizza'
  | 'Cakes';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: Category;
}