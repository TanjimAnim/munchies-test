import Header from "../Header";
import Navbar from "../navbar";
import { Box } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box id="homepage" background="#0C1712">
      <Navbar />
      <Header />
    </Box>
  );
}
