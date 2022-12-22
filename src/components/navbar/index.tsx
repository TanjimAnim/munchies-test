import { Box, Image, Link, Text, Tooltip } from "@chakra-ui/react";

//import assets
import munchiesLogoImage from "../../assets/munchiesLogo.png";
import searchImage from "../../assets/search.png";
import cardImage from "../../assets/card.png";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const textStyle = {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  cursor: "pointer",
};

export default function Navbar() {
  const cart = useSelector((state: RootState) => state.cart);

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
        <Link href="/cart">
          <Tooltip label="go to cart page">
            <Box position="relative">
              <Image src={cardImage.src} width="22px" height="22px" alt="" />
              {cart.items.length !== 0 ? (
                <Box
                  color="white"
                  width="28px"
                  borderRadius="50%"
                  background="#F3BA00"
                  position="absolute"
                  top="-8px"
                  left="19px"
                  textAlign="center"
                  fontWeight={700}
                >
                  {cart.items.length}
                </Box>
              ) : (
                <Box></Box>
              )}
            </Box>
          </Tooltip>
        </Link>
      </Box>
    </Box>
  );
}
