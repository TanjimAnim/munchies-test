import Header from "../Header";
import Navbar from "../navbar";
import { Box } from "@chakra-ui/react";

//import assets
import pattern1 from "../../assets/pattern.png";
import pattern2 from "../../assets/patternBG.png";

export default function HomePage() {
  return (
    <Box id="homepage" background="#0C1712">
      <Navbar />
      <Header />
    </Box>
  );
}
