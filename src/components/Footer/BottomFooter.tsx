import { Box, Text, Input, Image } from "@chakra-ui/react";

//import icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

//import assets
import tgImage from "../../assets/telegram-plane.png";
import visaImage from "../../assets/cc-visa.png";
import masterCardImage from "../../assets/cc-mastercard.png";
import appleCardImage from "../../assets/cc-apple-pay.png";

export default function TopFooter() {
  return (
    <>
      <Box
        background="#333333"
        marginTop="-308px"
        position="relative"
        zIndex={1}
      >
        <Box
          display="flex"
          justifyContent="space-around"
          borderBottom="1px solid white"
          marginLeft="160px"
          width="84%"
        >
          <Box paddingTop="39px">
            <Text
              fontWeight={700}
              fontSize="32px"
              color="white"
              fontStyle="normal"
            >
              ¿Te apasiona ayudar a tu comunidad?
            </Text>
            <Text
              fontWeight={700}
              fontSize="65px"
              color="white"
              fontStyle="normal"
            >
              Fonditas
            </Text>
            <Box
              display="flex"
              gap="8px"
              paddingTop="28px"
              paddingBottom="46px"
            >
              <Box
                as="button"
                borderRadius="50%"
                width="48px"
                background="#EB8E78"
                height="48px"
                padding="1rem"
                color="white"
                transition="background 0.3s ease-in"
                _hover={{
                  background: "#db8470",
                }}
              >
                <FaFacebookF />
              </Box>
              <Box
                as="button"
                borderRadius="50%"
                width="48px"
                background="#EB8E78"
                height="48px"
                padding="1rem"
                color="white"
                transition="background 0.3s ease-in"
                _hover={{
                  background: "#db8470",
                }}
              >
                <FaTwitter />
              </Box>
              <Box
                as="button"
                borderRadius="50%"
                width="48px"
                background="#EB8E78"
                height="48px"
                padding="1rem"
                color="white"
                transition="background 0.3s ease-in"
                _hover={{
                  background: "#db8470",
                }}
              >
                {" "}
                <FaInstagram />{" "}
              </Box>
            </Box>
          </Box>
          <Box color="white" paddingTop="75px">
            <Text fontSize="26px" fontWeight={400}>
              Menu
            </Text>
            <Box paddingTop="32px">
              <Text fontSize="20px" fontWeight={400}>
                Nosotors
              </Text>
              <Text fontSize="20px" fontWeight={400}>
                Fonditas
              </Text>
            </Box>
          </Box>
          <Box color="white" paddingTop="140px">
            <Text fontSize="20px" fontWeight={400}>
              Mapa
            </Text>
            <Text fontSize="20px" fontWeight={400}>
              Subir
            </Text>
          </Box>
          <Box color="white" paddingTop="75px">
            <Text fontSize="26px" fontWeight={400}>
              Suscríbete
            </Text>
            <Box paddingTop="43px">
              <Box position="absolute">
                <Input
                  placeholder="Tu e-mail"
                  padding="1rem"
                  background="white"
                />
                <Image
                  src={tgImage.src}
                  position="absolute"
                  top="6px"
                  right="6px"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" paddingY="46px" marginLeft="160px" width="84%">
          <Box display="flex" gap="16px">
            <Image src={visaImage.src} />
            <Image src={masterCardImage.src} />
            <Image src={appleCardImage.src} />
          </Box>
          <Box display="flex" gap="22px">
            <Text fontSize="20px" fontWeight={400} color="white">
              Términos y condiciones
            </Text>
            <Text fontSize="20px" fontWeight={400} color="white">
              Privacidad
            </Text>
            <Text
              fontWeight={400}
              fontSize="20px"
              color="rgba(255, 255, 255, 0.502972)"
            >
              &#169; 2020 Fonditas
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
