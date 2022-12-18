import { Box, Image, Text } from "@chakra-ui/react";

//importing assets
import chefImage from "../../assets/chef_woman.png";
import dotImage1 from "../../assets/CombinedShape.png";
import dotImage2 from "../../assets/CombinedShape1.png";
import patternImage1 from "../../assets/patternFonda.png";
import patternImage2 from "../../assets/patternFonda2.png";
import coffeeImage from "../../assets/coffee.png";
import mapImage from "../../assets/map4.png";

export default function Fondas() {
  return (
    <Box
      id="map"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box position="relative" flexShrink={0} alignItems="flex-start">
        <Image src={chefImage.src} />
        <Image
          src={dotImage1.src}
          position="absolute"
          top="95px"
          left="141px"
        />
        <Image
          src={dotImage2.src}
          position="absolute"
          top="157px"
          left="141px"
        />
        <Image
          src={patternImage1.src}
          position="absolute"
          bottom="-60%"
          left="-20%"
          zIndex={-1}
        />

        <Image
          src={mapImage.src}
          position="absolute"
          top="105px"
          right="84px"
        />

        <Image
          src={coffeeImage.src}
          position="absolute"
          top="330px"
          left="102px"
        />
      </Box>

      <Box position="relative">
        <Image
          src={patternImage2.src}
          position="absolute"
          top="0px"
          right="-29%"
          zIndex={-1}
        />
        <Box
          padding="10px"
          background="#5EAE53"
          width="90px"
          borderRadius="8px"
          color="white"
        >
          FONDAS
        </Box>
        <Text
          width="548px"
          fontSize="56px"
          fontWeight={700}
          color="black"
          marginTop="18px"
          marginBottom="14px"
        >
          Sube tu fonda a fonditas y duplica tus ingresos
        </Text>
        <Text
          fontSize="16px"
          fontWeight={400}
          color="rgba(51, 51, 51, 0.501557)"
        >
          Inscríbete a nuestra plataforma y comienza a generar en estos momentos
          de crísis
        </Text>
        <Box
          cursor="pointer"
          marginTop="21px"
          width="129px"
          background="#EB8E78"
          borderRadius="12px"
          padding="0.7rem"
          color="white"
          fontSize="16px"
          transition="background 0.3s ease-in"
          _hover={{
            background: "#db8470",
          }}
        >
          Subir mi fonda
        </Box>
      </Box>
    </Box>
  );
}
