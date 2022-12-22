import { Box, Image, Text, Input, Textarea } from "@chakra-ui/react";

//import assets
import FoodDeliveryImage from "../../assets/FoodDeliveryMan.png";

export default function Contact() {
  return (
    <Box background="#F7F8FA" id="contact">
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        paddingY="100px"
        paddingX="109px"
      >
        <Box>
          <Text color="#101115" fontSize="24px" letterSpacing="-0.012em">
            Do you have a question or want to become a seller?
          </Text>
          <Text
            marginTop="5px"
            fontSize="12px"
            fontWeight={400}
            letterSpacing="-0.012em"
          >
            Fill this form and our manager will contact you next 48 hours.
          </Text>
          <Box marginTop="32px">
            <Box display="flex" gap="16px">
              <Input
                placeholder="Your Name"
                background="white"
                height="58px"
                borderRadius="10px"
                color="#929292"
              />
              <Input
                placeholder="Your e-mail"
                background="white"
                height="58px"
                borderRadius="10px"
                color="#929292"
              />
            </Box>
            <Textarea
              width="616px"
              boxShadow="0px 0px 1px rgba(0, 0, 0, 0.25)"
              borderRadius="10px"
              placeholder="Your Message"
              background="white"
              marginTop="25px"
              color="#929292"
            />
          </Box>
        </Box>
        <Box>
          <Image src={FoodDeliveryImage.src} alt="" />
        </Box>
      </Box>
    </Box>
  );
}
