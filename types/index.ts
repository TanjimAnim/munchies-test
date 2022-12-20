export type FoodType = {
  id: number;
  name: string;
  price: number;
  quantity_available: number;
  image: string;
  vat: number;
  addones: {
    id: number;
    name: string;
    is_default?: true;
    price: number;
  }[];
};

export type FoodCartType = FoodType & {
  quantity: number;
};
