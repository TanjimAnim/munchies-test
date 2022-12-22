import { Box, Button, Image, Text, Select } from "@chakra-ui/react";
import FoodCard from "./foodCard";

//importing assets
import plusSignImage from "../../assets/plussign.png";

const ButtonStyle = {
  padding: "1rem",
  border: "1px solid #F3BA00",
  borderRadius: "0px",
  background: "transparent",
  borderLeft: "none",
  transition: "background 0.3s ease-in,color 0.3s ease-in",
};

const SideButtonStyle = {
  padding: "1rem",
  border: "1px solid #F3BA00",
  background: "transparent",
  width: "100px",
  transition: "background 0.3s ease-in,color 0.3s ease-in",
};

const HoverStyle = {
  background: "#F3BA00 !important",
  color: "white",
};

export default function Menu() {
  return (
    <Box background="#F7F8FA" width="100%" paddingTop="105px">
      <Text
        fontSize="24px"
        letterSpacing="-0.012em"
        textAlign="left"
        marginLeft="265px"
      >
        Home Kitchen
      </Text>
      <Box display="flex" gap="0px" marginTop="16px" marginLeft="265px">
        <Button
          style={SideButtonStyle}
          borderRadius="10px 0px 0px 10px"
          _hover={HoverStyle}
        >
          All
        </Button>
        <Button style={ButtonStyle} width="100px" _hover={HoverStyle}>
          Button
        </Button>
        <Button width="156px" style={ButtonStyle} _hover={HoverStyle}>
          Free delivery
        </Button>
        <Button style={ButtonStyle} _hover={HoverStyle}>
          New
        </Button>
        <Button
          style={SideButtonStyle}
          borderRadius="0px 10px 10px 0px"
          borderLeft="none !important"
          _hover={HoverStyle}
        >
          Coming
        </Button>
      </Box>
      <Box
        width="251px"
        borderRadius="10px"
        padding="13px 19px"
        marginY="40px"
        marginLeft="242px"
      >
        <Select placeholder="Filters" border="1px solid #929292 !important">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>

      <FoodCard />
      <Box
        display="flex"
        justifyContent="center"
        paddingTop="99px"
        paddingBottom="50px"
      >
        <Button
          width="172px"
          border="1px solid #F3BA00"
          borderRadius="10px"
          padding="1rem"
          color="#929292"
          background="transparent"
          gap="12px"
        >
          <Image src={plusSignImage.src} alt="" /> Load more...
        </Button>
      </Box>
    </Box>
  );
}
