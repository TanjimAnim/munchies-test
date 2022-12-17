import { Box, Image, Input, Text, Button } from "@chakra-ui/react";

//importing assets
import foodImage1 from "../../assets/food1.png";
import foodImage2 from "../../assets/food2.png";
import foodImage3 from "../../assets/food3.png";
import dotImage from "../../assets/dots.png";
import pinImage from "../../assets/pin.png";

//import icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <Box
      id="header"
      display="flex"
      justifyContent="space-between"
      marginTop="90px"
      paddingLeft="140px"
    >
      <Box>
        <Text
          fontStyle="normal"
          fontWeight={400}
          fontSize="50px"
          color="#F6B76C"
        >
          De tu fonda favorita
        </Text>
        <Text
          width="533px"
          fontStyle="normal"
          fontWeight={700}
          fontSize="72px"
          color="white"
        >
          La comida que ya conoces al mejor precio
        </Text>
        <Box marginY="49px" position="relative">
          <Input
            placeholder="Busca tu platillo favorito"
            background="white"
            borderRadius="12px"
            height="50px"
            _focus={{
              outline: "none",
              border: "0",
            }}
          />
          <Button
            position="absolute"
            zIndex={1}
            background="#EB8E78"
            borderRadius="12px"
            width="116px"
            paddingY="14px"
            paddingX="30px"
            color="white"
            top="1px"
            right="1px"
            height="48px"
          >
            Buscar
          </Button>
        </Box>
        <Box display="flex" gap="8px" paddingTop="127px" paddingBottom="46px">
          <Box
            as="button"
            borderRadius="50%"
            width="48px"
            background="#EB8E78"
            height="48px"
            padding="1rem"
            color="white"
            transition="background 0.3s ease-in"
            _hover={{
              background: "#db8470",
            }}
          >
            <FaFacebookF />
          </Box>
          <Box
            as="button"
            borderRadius="50%"
            width="48px"
            background="#EB8E78"
            height="48px"
            padding="1rem"
            color="white"
            transition="background 0.3s ease-in"
            _hover={{
              background: "#db8470",
            }}
          >
            <FaTwitter />
          </Box>
          <Box
            as="button"
            borderRadius="50%"
            width="48px"
            background="#EB8E78"
            height="48px"
            padding="1rem"
            color="white"
            transition="background 0.3s ease-in"
            _hover={{
              background: "#db8470",
            }}
          >
            {" "}
            <FaInstagram />{" "}
          </Box>
        </Box>
      </Box>
      <Box position="relative" width="24%" zIndex={1}>
        <Image
          src={foodImage1.src}
          position="absolute"
          borderRadius="12px"
          top="8%"
          left="-81%"
          zIndex={1}
        />
        <Image
          src={foodImage2.src}
          position="absolute"
          borderRadius="12px"
          top="52%"
          left="-120%"
        />
        <Image
          src={foodImage3.src}
          position="absolute"
          borderRadius="12px"
          zIndex={2}
          top="0%"
          left="17%"
        />

        <Image
          src={pinImage.src}
          position="absolute"
          top="57%"
          left="-23%"
          zIndex={2}
        />
        <Image
          id="dot-on-pin"
          src={dotImage.src}
          position="absolute"
          zIndex={2}
          top="52%"
          left="-12%"
        />
        <Image
          src={dotImage.src}
          position="absolute"
          id="dot-on-food-1"
          top="15%"
          left="-96%"
        />
        <Image
          src={dotImage.src}
          position="absolute"
          id="dot-on-food-2"
          top="6%"
          left="-96%"
        />
      </Box>
    </Box>
  );
}
