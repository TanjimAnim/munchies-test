import { Box, Image, Text } from "@chakra-ui/react";

//import assets
import munchiesLogoImage from "../../assets/munchiesLogo.png";
import searchImage from "../../assets/search.png";
import cardImage from "../../assets/card.png";

const textStyle = {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
};

export default function Navbar() {
  return (
    <Box
      display="flex"
      background="transparent"
      paddingX="135px"
      paddingTop="16px"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box id="munchies-logo" position="relative" zIndex={1}>
        <Image src={munchiesLogoImage.src} width="128px" />
      </Box>
      <Box
        id="menu"
        display="flex"
        gap="84px"
        color="white"
        style={textStyle}
        alignItems="center"
      >
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Menu</Text>
        <Text>Blog</Text>
        <Text>Contact</Text>
      </Box>
      <Box id="cart" display="flex" gap="16px">
        <Image src={searchImage.src} width="22px" height="22px" />

        <Image src={cardImage.src} width="22px" height="22px" />
      </Box>
    </Box>
  );
}
