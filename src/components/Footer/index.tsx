import { Box, Text, Image, Link } from "@chakra-ui/react";

//import assets
import whatToEatImage from "../../assets/WHAT2EAT.png";
import facebookImage from "../../assets/facebook.png";
import igImage from "../../assets/instagram.png";

const textStyle = {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
};

export default function Footer() {
  return (
    <>
      <Box background="#1AC073" marginTop="60px">
        <Box
          display="flex"
          paddingY="30px"
          justifyContent="space-between"
          borderBottom="1px solid white"
          marginX="auto"
          width="73%"
        >
          <Box id="munchies-logo" position="relative" zIndex={1}>
            <Image src={whatToEatImage.src} width="128px" alt="" />
          </Box>
          <Box
            id="menu"
            display="flex"
            gap="40px"
            color="white"
            style={textStyle}
            alignItems="center"
          >
            <Link href="/">
              <Text>Home</Text>
            </Link>
            <Link href="#header">
              <Text>About</Text>
            </Link>
            <Link href="#menu">
              <Text>Menu</Text>
            </Link>
            <Link href="#blog">
              <Text>Blog</Text>
            </Link>
            <Link href="#contact">
              <Text>Contact</Text>
            </Link>
          </Box>
          <Box id="cart" display="flex" gap="16px">
            <Image src={facebookImage.src} width="22px" height="22px" alt="" />

            <Image src={igImage.src} width="22px" height="22px" alt="" />
          </Box>
        </Box>
        <Box paddingY="16px" display="flex" justifyContent="center">
          <Text color="white" fontSize="12px" fontWeight={400}>
            Copyright &#169;2021 What2Eat
          </Text>
        </Box>
      </Box>
    </>
  );
}
