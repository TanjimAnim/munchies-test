import { Box, chakra, Image, Text, useToast, Tooltip } from "@chakra-ui/react";
import { FoodType } from "../../../types";
import { useGetAllProductsQuery } from "../../services/products";

//redux
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";

//import assets
import addToCartImage from "../../assets/add-to-cart.png";

//import actions
import { addToCart, CartState } from "../../features/slice";

import { useEffect } from "react";

export default function FoodCard() {
  const FoodData = useGetAllProductsQuery("").data;
  const cart = useSelector((state: RootState) => state.cart);
  const { isLoading, isError } = useGetAllProductsQuery("");

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    function handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        window.location.reload();
      }
    }
    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
      false
    );
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  });
  return (
    <Box
      marginTop="40px"
      marginLeft="265px"
      display="flex"
      flexWrap="wrap"
      gap="24px"
    >
      {isError ? (
        <Box>
          {" "}
          <Text> Oh no there was an error</Text>
        </Box>
      ) : isLoading ? (
        <Box></Box>
      ) : (
        FoodData.data.map((item: FoodType) => {
          return (
            <Box key={item.id} borderRadius="10px">
              <Image
                src={item.image}
                width="277px"
                height="250px"
                borderRadius="10px 10px 0px 0px"
                alt=""
              />
              <Box
                background="white"
                padding="15px 12px 15px 12px"
                boxShadow="0px 0px 1px rgba(187, 187, 187, 0.25)"
                borderRadius="0px 0px 10px 10px"
              >
                <Box display="flex" justifyContent="space-between">
                  <Text
                    fontSize="16px"
                    fontWeight={400}
                    letterSpacing="-0.012em"
                    color="#1B1C21"
                  >
                    {item.name}
                  </Text>
                  <Text
                    fontSize="16px"
                    fontWeight={400}
                    letterSpacing="-0.012em"
                    color="#1B1C21"
                  >
                    {item.price} <chakra.span fontWeight={700}>BDT</chakra.span>
                  </Text>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginTop="16px"
                >
                  <Box display="flex" gap="12px">
                    <Box
                      padding="0px 4px"
                      color="#1B1C21"
                      background="#F7F8FA"
                      boxShadow="0px 0px 1px rgba(0, 0, 0, 0.25)"
                      borderRadius="5px"
                    >
                      Qty: {item.quantity_available}
                    </Box>
                    <Box
                      padding="0px 4px"
                      background="#F7F8FA"
                      borderRadius="5px"
                      color="#1B1C21"
                    >
                      50-79 min
                    </Box>
                  </Box>
                  <Tooltip label="add to cart">
                    <Box
                      as="button"
                      onClick={() => {
                        dispatch(addToCart(item));
                        toast({
                          title: "Item Added",
                          status: "success",
                          duration: 2000,
                          isClosable: true,
                        });
                      }}
                    >
                      <Image src={addToCartImage.src} alt="" />
                    </Box>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          );
        })
      )}
    </Box>
  );
}
