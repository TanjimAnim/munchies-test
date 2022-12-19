import { Box, Button, Image, Text, Select } from "@chakra-ui/react";
import FoodCard from "./foodCard";

export default function Menu() {
  return (
    <Box background="#F7F8FA" width="100%">
      <Text marginTop="105px" fontSize="24px" letterSpacing="-0.012em">
        Home Kitchen
      </Text>
      <Box display="flex" gap="0px">
        <Button
          border="1px solid #F3BA00"
          borderRadius="10px 0px 0px 10px"
          padding="1rem"
        >
          All
        </Button>
        <Button
          padding="1rem"
          border="1px solid #F3BA00"
          borderRadius="none"
          background="transparent"
        >
          Button
        </Button>
        <Button
          padding="1rem"
          border="1px solid #F3BA00"
          borderRadius="none"
          background="transparent"
        >
          Free delivery
        </Button>
        <Button
          padding="1rem"
          border="1px solid #F3BA00"
          borderRadius="none"
          background="transparent"
        >
          New
        </Button>
        <Button
          padding="1rem"
          border="1px solid #F3BA00"
          borderRadius="0px 10px 10px 0px"
          background="transparent"
        >
          Coming
        </Button>
      </Box>
      <Box width="251px" borderRadius="10px" padding="13px 19px" marginY="40px">
        <Select placeholder="Filters">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>

      <FoodCard />
    </Box>
  );
}
