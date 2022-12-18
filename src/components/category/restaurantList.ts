//importing assets
import image1 from "../../assets/Rectangle1.png";
import image2 from "../../assets/Rectangle2.png";
import image3 from "../../assets/Rectangle3.png";
import image4 from "../../assets/Rectangle4.png";

type RestaurantListType = {
  id: number;
  name: string;
  time: string;
  type: string;
  rating: number;
  image: string;
};

export const RestaurantList: RestaurantListType[] = [
  {
    id: 1,
    name: "Doña Laura",
    time: "20-30 min",
    type: "Fonditas",
    rating: 9.8,
    image: image1.src,
  },
  {
    id: 2,
    name: "Rosa Cafe",
    time: "~45 min",
    type: "Loncheria",
    rating: 8.5,
    image: image2.src,
  },
  {
    id: 3,
    name: "Le cottidiene",
    time: "15-20 min",
    type: "Sushi",
    rating: 7.3,
    image: image3.src,
  },
  {
    id: 4,
    name: "Querreque",
    time: "~50 min",
    type: "Veggies",
    rating: 8.0,
    image: image4.src,
  },
];
