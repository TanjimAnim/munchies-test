import Header from "../Header";
import Navbar from "../navbar";
import { Box } from "@chakra-ui/react";

//import assets
import pattern1 from "../../assets/pattern.png";
import pattern2 from "../../assets/patternBG.png";

export default function HomePage() {
  return (
    <Box id="homepage" background="black">
      <Navbar />
      <Header />
      <Box
        position="absolute"
        width="368px"
        height="324px"
        left="0px"
        top="0px"
        backgroundImage={pattern1.src}
      />
      <Box
        position="absolute"
        width="1436px"
        height="774px"
        left="672px"
        top="151px"
        backgroundImage={pattern2.src}
      />
    </Box>
  );
}
