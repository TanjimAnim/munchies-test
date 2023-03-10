import { Text, Box, IconButton, Image, Tooltip } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { removeCart } from "../../src/features/slice";
import { useEffect } from "react";

import "./cart.css";

//redux state
import { RootState } from "../../src/app/store";
import { useSelector, useDispatch } from "react-redux";
import { FoodCartType } from "../../types";

const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);
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
    <>
      <Box marginTop="50px" marginLeft="91px">
        <Text fontSize="3xl" fontWeight={700}>
          Cart
        </Text>
      </Box>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th colSpan={2}>Total(5% VAT included)</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item: FoodCartType) => {
            return (
              <tr key={item.id}>
                <td>
                  <Image src={item.image} width="121px" height="118px" alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.price} BDT</td>

                <td>{item.quantity}</td>
                <td>{item.total_price.toFixed(2)} BDT</td>
                <td>
                  <Tooltip label="remove item from cart">
                    <IconButton
                      aria-label="remove item"
                      icon={<CloseIcon />}
                      onClick={() => {
                        dispatch(removeCart(item.id));
                      }}
                      background="none"
                    />
                  </Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Box display="flex" justifyContent="end">
        <Box
          padding="1rem"
          marginRight="91px"
          marginTop="38px"
          marginBottom="10px"
          as="button"
          background="black"
          color="white"
          borderRadius="0"
          _hover={{
            background: "white",
            color: "black",
          }}
        >
          <Link href="/checkout"> PROCEED TO CHECKOUT</Link>
        </Box>
      </Box>
    </>
  );
};

export default ShoppingCart;
