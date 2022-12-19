import { Box } from "@chakra-ui/react";
import { FoodType } from "../../../types";
import { munchiesApi, useGetAllProductsQuery } from "../../services/products";

export default function FoodCard() {
  //const { isError, isLoading, data } = useGetAllProductsQuery("");
  console.log(useGetAllProductsQuery(""));
  return <Box marginTop="40px"></Box>;
}
