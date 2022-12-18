import { Box, Image, Text } from "@chakra-ui/react";

//import restaurant list
import { RestaurantList } from "./restaurantList";

//import assets
import starImage from "../../assets/star.png";

export default function RestaurantCard() {
  return (
    <Box id="restaurant-card" marginTop="37px" marginBottom="90px">
      <Box display="flex" flexWrap="wrap" gap="48px" justifyContent="center">
        {RestaurantList.map((item) => {
          return (
            <Box
              key={item.id}
              width="270px"
              borderRadius="12px"
              cursor="pointer"
              transition="box-shadow 0.3s ease-in"
              _hover={{ boxShadow: "10px 20px 40px rgba(97, 49, 0, 0.2)" }}
            >
              <Box position="relative">
                <Image src={item.image} />
                <Box
                  position="absolute"
                  display="flex"
                  width="92px"
                  background="#EB8E78"
                  padding="8px"
                  borderRadius="8px"
                  top="10px"
                  left="10px"
                  gap="8px"
                >
                  <Image src={starImage.src} />
                  <Text fontWeight={400} fontSize="20px" color="white">
                    {item.rating.toFixed(1)}
                  </Text>
                </Box>
              </Box>

              <Box background="#F7F7F7" padding="1rem">
                <Text
                  fontStyle="normal"
                  color="#333333"
                  fontSize="24px"
                  fontWeight={700}
                >
                  {item.name}
                </Text>
                <Box display="flex" justifyContent="space-between">
                  <Text fontSize="16px">{item.time}</Text>
                  <Text fontSize="16px" color="rgba(51, 51, 51, 0.501557)">
                    {item.type}
                  </Text>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
