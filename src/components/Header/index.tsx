import { Box, Image, Input, Text, Button } from "@chakra-ui/react";

//importing assets
import guyImage from "../../assets/cuate.png";

export default function Header() {
  return (
    <Box
      id="header"
      display="flex"
      justifyContent="space-around"
      paddingY="180px"
      alignItems="center"
    >
      <Box width="534px">
        <Text fontStyle="normal" fontSize="70px" color="white">
          Authentic Home food in UK
        </Text>
        <Text
          width="441px"
          fontStyle="normal"
          fontWeight={400}
          fontSize="16px"
          color="white"
          letterSpacing="-0.012em"
        >
          What2Eat is a courier service in which authentic home cook food is
          delivered to a customer.
        </Text>
        <Box marginY="49px" display="flex">
          <Input
            placeholder="Search the food you love"
            background="white"
            borderRadius="10px 0px 0px 10px"
            height="58px"
            _focus={{
              outline: "none",
              border: "0",
            }}
            width="48%"
          />
          <Button
            background="#F3BA00"
            borderRadius="0px 10px 10px 0px"
            width="116px"
            padding="19px 29px"
            color="white"
            height="58px"
            fontSize="16px"
            fontWeight={600}
            letterSpacing="-0.012em"
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box>
        {" "}
        <Image src={guyImage.src} alt="" />
      </Box>
    </Box>
  );
}
