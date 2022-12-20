import { Box, Button, Image, Text, Select } from "@chakra-ui/react";
import FoodCard from "./foodCard";

//importing assets
import plusSignImage from "../../assets/plussign.png";

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
          border="1px solid #F3BA00"
          borderRadius="10px 0px 0px 10px"
          padding="1rem"
          width="100px"
        >
          All
        </Button>
        <Button
          padding="1rem"
          border="1px solid #F3BA00"
          borderRadius="none"
          background="transparent"
          width="100px"
          borderLeft="none"
        >
          Button
        </Button>
        <Button
          padding="1rem"
          border="1px solid #F3BA00"
          borderRadius="none"
          background="transparent"
          width="156px"
          borderLeft="none"
        >
          Free delivery
        </Button>
        <Button
          padding="1rem"
          border="1px solid #F3BA00"
          borderRadius="none"
          background="transparent"
          width="100px"
          borderLeft="none"
        >
          New
        </Button>
        <Button
          padding="1rem"
          border="1px solid #F3BA00"
          borderRadius="0px 10px 10px 0px"
          background="transparent"
          width="100px"
          borderLeft="none"
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
          <Image src={plusSignImage.src} /> Load more...
        </Button>
      </Box>
    </Box>
  );
}
