import { Box, Image, Text } from "@chakra-ui/react";

export default function Menu() {
  return (
    <>
      <Box
        marginTop="171px"
        width="123px"
        padding="15px"
        marginLeft="21%"
        borderRadius="8px"
        background="#5EAE53"
        color="white"
        textTransform="uppercase"
        textAlign="center"
      >
        Fonditas
      </Box>
      <Box
        paddingTop="18px"
        width="537px"
        paddingBottom="51px"
        marginLeft="20%"
      >
        <Text
          fontSize="56px"
          fontStyle="normal"
          fontWeight={700}
          textAlign="center"
          color="#333333"
        >
          Los mejores menús
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        width="91%"
        marginX="auto"
        alignItems="center"
        marginBottom="37px"
      >
        <Box>
          <Text
            fontSize="16px"
            fontWeight={400}
            color="rgba(51, 51, 51, 0.501557)"
          >
            Aquí están los mejores menús de la semana, y decide que vas a pedir
          </Text>
        </Box>
        <Box>
          <Text
            color="#333333"
            textAlign="right"
            fontWeight={400}
            fontSize="16px"
            alignSelf="center"
          >
            Ver todas
          </Text>
        </Box>
      </Box>
    </>
  );
}
