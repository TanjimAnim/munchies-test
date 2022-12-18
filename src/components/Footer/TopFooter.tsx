import { Box, Text, Image } from "@chakra-ui/react";

//importing assets
import iphoneImage from "../../assets/iphone.png";
import dotImage1 from "../../assets/dots.png";
import patternImage1 from "../../assets/patternFooter.png";
import patternImage2 from "../../assets/patternFooter2.png";

export default function TopFooter() {
  return (
    <>
      <Box
        background="#5EAE53"
        display="flex"
        justifyContent="space-around"
        marginTop="130px"
      >
        <Box width="470px" paddingTop="70px">
          <Text color="white" fontSize="70px" fontWeight={700}>
            Es tiempo de ayudarnos, ¿Te unes?
          </Text>
        </Box>
        <Box position="relative" flexShrink={0} paddingTop="57px">
          <Image src={iphoneImage.src} zIndex={1} position="relative" />
          <Image
            src={dotImage1.src}
            position="absolute"
            top="98px"
            left="-81px"
          />
          <Image
            src={dotImage1.src}
            position="absolute"
            top="162px"
            left="-81px"
          />
          <Image
            src={patternImage1.src}
            position="absolute"
            top="330px"
            left="-85px"
          />
          <Image
            src={patternImage2.src}
            position="absolute"
            top="117px"
            left="223px"
          />
        </Box>
      </Box>
    </>
  );
}
