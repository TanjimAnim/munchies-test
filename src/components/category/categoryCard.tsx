import { Box, Image, Text } from "@chakra-ui/react";
import { CategoryList } from "./categoryList";

export default function CategoryCard() {
  return (
    <Box id="category-card" marginTop="51px" marginBottom="123px">
      <Box display="flex" flexWrap="wrap" gap="30px" justifyContent="center">
        {CategoryList.map((item) => {
          return (
            <Box
              key={item.id}
              position="relative"
              role="group"
              width="181px"
              background="#F7F7F7"
              borderRadius="12px"
              padding="1rem"
              cursor="pointer"
              transition="background 0.3s ease-in"
              color="black"
              _hover={{
                background: "#F49B3F",
                boxShadow: "10px 20px 40px rgba(97, 49, 0, 0.2)",
                color: "white",
              }}
            >
              <Box
                width="112px"
                minHeight="107px"
                borderRadius="50%"
                position="relative"
                padding="1rem"
                marginTop="32px"
                marginX="auto"
                background="white"
              >
                <Image src={item.image} padding="21%" />
                <Box
                  width="50px"
                  borderRadius="50%"
                  background="#AFD3AA"
                  padding="0.8rem"
                  position="absolute"
                  top="0px"
                  right="-13%"
                  color="white"
                  textAlign="center"
                  transition="background 0.3s ease-in"
                  _groupHover={{
                    background: "#5EAE53",
                  }}
                >
                  {item.quantity}
                </Box>
              </Box>
              <Box>
                <Text
                  textAlign="center"
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize="20px"
                  paddingTop="17px"
                >
                  {item.name}
                </Text>
                <Text
                  color="rgba(51, 51, 51, 0.50133)"
                  textAlign="center"
                  fontStyle="normal"
                  fontWeight={400}
                  fontSize="14px"
                  _groupHover={{ color: "white" }}
                >
                  {item.price}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>{" "}
    </Box>
  );
}
