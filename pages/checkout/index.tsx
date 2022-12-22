import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

//redux hooks
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../src/app/store";
import { clearCart } from "../../src/features/slice";

const Checkout = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  var [input, setInput] = useState({
    user_email: "",
    user_name: "",
    user_address: "",
    user_phone: "",
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalVat, setTotalVat] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    var totalPriceArray = cart.items.map((item) => item.total_price);
    var totalPriceWithoutVatArray = cart.items.map(
      (item) => item.price * item.quantity
    );

    var sum = 0;
    var sumWithoutVat = 0;
    for (let i = 0; i < totalPriceArray.length; i++) {
      sum += totalPriceArray[i];
    }
    for (let i = 0; i < totalPriceWithoutVatArray.length; i++) {
      sumWithoutVat += totalPriceWithoutVatArray[i];
    }
    setTotalPrice(sum);
    setTotalVat(sum - sumWithoutVat);
  }, [cart]);

  //useEffect for page reload for state update
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

  const handleSubmit = async (event: React.FormEvent) => {
    if (cart.items.length === 0) {
      return alert("Please select some product before confirming payment");
    }
    event.preventDefault();
    const data = {
      customer: {
        name: input.user_name,
        address: input.user_address,
        phone: input.user_phone,
      },
      calculation: {
        price: totalPrice - totalVat,
        vat: totalVat,
        total: totalPrice,
      },
      items: cart.items.map((item) => item),
    };

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    dispatch(clearCart());
    alert("Order has been placed");

    const response = await axios
      .post("/munchies/order", data, {
        headers: {
          "x-access-user": `${input.user_email}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <Box
      id="signin"
      display="flex"
      flexDir="column"
      justifyContent="center"
      marginTop="5%"
    >
      <Box marginX={{ base: "11%", md: "22%", lg: "26%" }}>
        <Text fontWeight={700} fontSize="3xl">
          Checkout
        </Text>
      </Box>
      <Box
        width={{
          base: "85%",
          md: "60%",
          xl: "50%",
        }}
        border="10px"
        p={5}
        mr="auto"
        ml="auto"
        mb="5%"
      >
        <Flex flexDir="column">
          <form onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel fontSize="18px">Email</FormLabel>
              <Input
                type="email"
                placeholder="type your email here"
                name="user_email"
                _focus={{
                  zIndex: "0",
                  borderColor: "#3182ce",
                }}
                onChange={handleChange}
                value={input.user_email}
              />
            </FormControl>
            <FormControl id="name" isRequired marginTop="30px">
              <FormLabel fontSize="18px">Name</FormLabel>
              <Input
                type="text"
                placeholder="type your name here"
                name="user_name"
                _focus={{
                  zIndex: "0",
                  borderColor: "#3182ce",
                }}
                onChange={handleChange}
                value={input.user_name}
              />
            </FormControl>

            <Box display="flex" marginTop="30px">
              <FormControl id="address" isRequired>
                <FormLabel fontSize="18px">Address</FormLabel>
                <Input
                  type="text"
                  placeholder="type your address"
                  name="user_address"
                  _focus={{
                    zIndex: "0",
                    borderColor: "#3182ce",
                  }}
                  value={input.user_address}
                  onChange={handleChange}
                  width="77%"
                />
              </FormControl>
              <FormControl id="phone_number" isRequired>
                <FormLabel fontSize="18px">Phone Number</FormLabel>
                <Input
                  type="number"
                  placeholder="type your contact no"
                  name="user_phone"
                  _focus={{
                    zIndex: "0",
                    borderColor: "#3182ce",
                  }}
                  value={input.user_phone}
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
            {error ? (
              <div>
                <Text color="red" fontSize="18px" fontWeight={700}>
                  {error}
                </Text>
              </div>
            ) : (
              <div></div>
            )}
            <Box
              display="flex"
              backgroundColor="#F7F7F7"
              justifyContent="space-between"
              marginTop="40px"
            >
              <Box padding="1rem">
                <Text>Product</Text>
              </Box>
              <Box padding="1rem">
                <Text>Total</Text>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              {cart.items.map((item) => {
                return (
                  <Box
                    key={item.id}
                    display="flex"
                    justifyContent="space-between"
                    padding="1rem"
                  >
                    <Box>
                      <Text>
                        {item.name} x {item.quantity}
                      </Text>
                    </Box>
                    <Box>
                      <Text>{item.quantity * item.price} BDT</Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box display="flex" justifyContent="space-between" marginTop="10px">
              <Box padding="1rem">
                <Text fontWeight={700}>Vat(5%)</Text>
              </Box>
              <Box padding="1rem">
                <Text fontWeight={700}>{totalVat.toFixed(2)} BDT</Text>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" marginTop="10px">
              <Box padding="1rem">
                <Text fontWeight={700}>Total</Text>
              </Box>
              <Box padding="1rem">
                <Text fontWeight={700}>{totalPrice.toFixed(2)} BDT</Text>
              </Box>
            </Box>
            <Box
              as="button"
              mt="2%"
              padding={2}
              backgroundColor="black"
              color="white"
              fontWeight="bold"
              type="submit"
              value="submit"
              marginLeft="40%"
            >
              CONFIRM PURCHASE
            </Box>
          </form>
        </Flex>
      </Box>
    </Box>
  );
};

export default Checkout;
