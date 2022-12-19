import { Box, Image, Text } from "@chakra-ui/react";

//import assets

const textStyle = {
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
};

export default function Navbar() {
  return (
    <Box
      display="flex"
      background="transparent"
      paddingX="135px"
      paddingTop="16px"
      width="100%"
      justifyContent="space-between"
    >
      <Box id="munchies-logo" position="relative" zIndex={1}>
        <Image />
      </Box>
      <Box
        id="menu"
        display="flex"
        gap="84px"
        color="white"
        style={textStyle}
        alignItems="center"
      >
        <Text>Nosotors</Text>
        <Text>Fonditas</Text>
        <Text>Mapa</Text>
        <Text>Inscribirse</Text>
      </Box>
      <Box id="cart" display="flex" gap="16px">
        <Box
          width="170px"
          border="1px solid rgba(255, 255, 255, 0.295743)"
          borderRadius="12px"
          paddingX="37px"
          paddingY="14px"
          color="white"
        >
          <Text style={textStyle} textAlign="center">
            Inicia sesion
          </Text>
        </Box>
        <Box>
          <Image />
        </Box>
      </Box>
    </Box>
  );
}
