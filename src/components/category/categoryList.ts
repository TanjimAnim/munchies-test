//import assets
import pizzaImage from "../../assets/pizza.png";
import sushiImage from "../../assets/sushi.png";
import burgerImage from "../../assets/hamburger.png";
import veggieImage from "../../assets/watermelon.png";
import noodleImage from "../../assets/noodle.png";
import cakeImage from "../../assets/cake.png";

type CategoryListType = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: string;
};

export const CategoryList: CategoryListType[] = [
  {
    id: 1,
    name: "Pizza",
    price: "Desde $60",
    quantity: 42,
    image: pizzaImage.src,
  },
  {
    id: 2,
    name: "Sushi",
    price: "Desde $50",
    quantity: 35,
    image: sushiImage.src,
  },
  {
    id: 3,
    name: "Hamburguesas",
    price: "Desde $50",
    quantity: 28,
    image: burgerImage.src,
  },
  {
    id: 4,
    name: "Veggie",
    price: "Desde $50",
    quantity: 23,
    image: veggieImage.src,
  },
  {
    id: 5,
    name: "Sopas",
    price: "Desde $50",
    quantity: 15,
    image: noodleImage.src,
  },
  {
    id: 6,
    name: "Postres",
    price: "Desde $50",
    quantity: 9,
    image: cakeImage.src,
  },
];
