import { Box, Text, Image } from "@chakra-ui/react";

//import assets
import cake1 from "../../assets/cake1.png";
import cake2 from "../../assets/cake2.png";
import cake3 from "../../assets/cake3.png";
import cake4 from "../../assets/cake4.png";
import cake5 from "../../assets/cake5.png";

const Title = () => {
  return (
    <Box margin="1rem">
      <Text
        fontSize="16px"
        color="#101115"
        letterSpacing="-0.012em"
        width="239px"
      >
        Most Satisfying Cake decorating Cake ideas
      </Text>
      <Text fontSize="12px" color="#1B1C21" letterSpacing="-0.012em">
        Quis hendrerit nibh mauris sed faucibus.
      </Text>
      <Text fontSize="12px" color="#1B1C21" letterSpacing="-0.012em">
        Quis hendrerit nibh mauris sed faucibus.
      </Text>
    </Box>
  );
};

export default function Blog() {
  return (
    <Box background="white">
      <Box marginLeft="265px" marginTop="100px" marginBottom="28px">
        <Text fontSize="26px" letterSpacing="-0.012em">
          Our Blog
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        flexWrap="wrap"
        marginLeft="50px"
        marginBottom="28px"
      >
        <Box>
          <Box>
            <Image src={cake1.src} />
            <Title />
          </Box>

          <Box>
            <Image src={cake2.src} />
            <Title />
          </Box>
        </Box>
        <Box>
          <Box>
            <Image src={cake3.src} />
            <Title />
          </Box>
        </Box>
        <Box>
          <Box>
            <Image src={cake4.src} />
            <Title />
          </Box>
          <Box>
            <Image src={cake5.src} />
            <Title />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
