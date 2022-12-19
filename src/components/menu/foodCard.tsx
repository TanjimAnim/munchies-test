import { Box } from "@chakra-ui/react";
import { FoodType } from "../../../types";
import { munchiesApi, useGetAllProductsQuery } from "../../services/products";

export default function FoodCard() {
  const productsQuery = useGetAllProductsQuery("");
  console.log(productsQuery)
  return <Box marginTop="40px"></Box>;
}
