import { Box, Text, Image } from "@chakra-ui/react";
import CategoryCard from "./categoryCard";

//import assets
import arrow from "../../assets/arrow.png";

export default function Category() {
  return (
    <Box id="category" paddingTop="75px">
      <Box
        width="123px"
        padding="15px"
        marginX="auto"
        borderRadius="8px"
        background="#5EAE53"
        color="white"
        textTransform="uppercase"
        textAlign="center"
      >
        Categorías
      </Box>
      <Box paddingTop="18px" width="358px" paddingBottom="51px" marginX="auto">
        <Text
          fontSize="56px"
          fontStyle="normal"
          fontWeight={700}
          textAlign="center"
          color="#333333"
        >
          Las favoritas
        </Text>
      </Box>
      <CategoryCard />
      <Box
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
        width="464px"
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
          Fondas cercanas
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        width="91%"
        marginX="auto"
        alignItems="center"
      >
        <Box>
          <Text
            fontSize="16px"
            fontWeight={400}
            color="rgba(51, 51, 51, 0.501557)"
          >
            'Estás son las fondas que se encuentran cerca!
          </Text>
        </Box>
        <Box display="flex" gap="28px">
          <Text
            color="#333333"
            textAlign="right"
            fontWeight={400}
            fontSize="16px"
            alignSelf="center"
          >
            Ver todas
          </Text>
          <Box display="flex" gap="8px">
            <Box
              as="button"
              borderRadius="50%"
              background="#EB8E78"
              width="48px"
              padding="1rem"
              transition="background 0.3s ease-in"
              _hover={{
                background: "#db8470",
              }}
            >
              <Image src={arrow.src} transform="rotate(180deg)" />
            </Box>
            <Box
              as="button"
              borderRadius="50%"
              background="#EB8E78"
              width="48px"
              padding="1rem"
              transition="background 0.3s ease-in"
              _hover={{
                background: "#db8470",
              }}
            >
              <Image src={arrow.src} marginLeft="3px" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
