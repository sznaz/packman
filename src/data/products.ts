import { Product } from "../types/product.type";
// Meals
import chickenMeal from "../assets/images/meals/chicken-meals.jpg";
import vegMeal from "../assets/images/meals/veg-meal.avif";
import muttonMeal from "../assets/images/meals/mutton-meal.jpg";

// Juices
import orangeJuice from "../assets/images/juice/orange.png";
import pinappleJuice from "../assets/images/juice/pineapple.jpg";
import appleJuice from "../assets/images/juice/apple.jpg";
import grapeJuice from "../assets/images/juice/grape.jpg";

// Pizza
import pepperoniPizza from "../assets/images/pizza/pepperoni.jpg";
import chickenPizza from "../assets/images/pizza/chicken.jpeg";

// Cakes
import chocolateCake from "../assets/images/cakes/chocolate.avif";
import vanilaCake from "../assets/images/cakes/vanila.webp";

// Burgers
import cheeseBurger from "../assets/images/burger/cheese.webp";
import hamBurger from "../assets/images/burger/hamburger.jpg";
export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Chicken Meal",
    price: 250,
    image: chickenMeal,
    category: "Meals",
  },
  {
    id: "2",
    name: "Veg Meal",
    price: 200,
    image: vegMeal,
    category: "Meals",
  },
  {
    id: "3",
    name: "Mutton Meal",
    price: 340,
    image: muttonMeal,
    category: "Meals",
  },
  {
    id: "4",
    name: "Pepperoni Pizza",
    price: 400,
    image: pepperoniPizza,
    category: "Pizza",
  },
  {
    id: "9",
    name: "Chicken Pizza",
    price: 550,
    image: chickenPizza,
    category: "Pizza",
  },
  {
    id: "5",
    name: "Chocolate Cake",
    price: 300,
    image: chocolateCake,
    category: "Cakes",
  },
  {
    id: "10",
    name: "Vanilla Cake",
    price: 250,
    image: vanilaCake,
    category: "Cakes",
  },
  {
    id: "6",
    name: "Cheese Burger",
    price: 180,
    image: cheeseBurger,
    category: "Burgers",
  },
  {
    id: "11",
    name: "Ham Burger",
    price: 200,
    image: hamBurger,
    category: "Burgers",
  },
  {
    id: "7",
    name: "Orange Juice",
    price: 120,
    image: orangeJuice,
    category: "Juices",
  },
  {
    id: "8",
    name: "Pineapple Juice",
    price: 80,
    image: pinappleJuice,
    category: "Juices",
  },
  {
    id: "12",
    name: "Apple Juice",
    price: 70,
    image: appleJuice,
    category: "Juices",
  },
  {
    id: "13",
    name: "Grape Juice",
    price: 90,
    image: grapeJuice,
    category: "Juices",
  },
];
