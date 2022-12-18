import { Box, Image, Input, Text } from "@chakra-ui/react";

//importing assets
import manImage from "../../assets/man.png";
import dotImage1 from "../../assets/CombinedShape.png";
import dotImage2 from "../../assets/CombinedShape1.png";
import patternImage1 from "../../assets/patternMap.png";
import patternImage2 from "../../assets/patternMap2.png";
import pinImage from "../../assets/map1.png";
import pinImage2 from "../../assets/map3.png";
import mapImage from "../../assets/map.png";
import filterImage from "../../assets/filter.png";

export default function Map() {
  return (
    <Box id="map" display="flex" justifyContent="end" alignItems="end">
      <Box position="relative" flexShrink={0}>
        <Image src={manImage.src} />
        <Image
          src={dotImage1.src}
          position="absolute"
          top="133px"
          right="118px"
        />
        <Image
          src={dotImage2.src}
          position="absolute"
          top="71px"
          right="118px"
        />
        <Image
          src={patternImage1.src}
          position="absolute"
          bottom="49px"
          left="-207px"
        />

        <Image
          src={mapImage.src}
          position="absolute"
          top="290px"
          right="57px"
        />
        <Image
          src={filterImage.src}
          position="absolute"
          top="144px"
          left="107px"
        />
        <Box
          display="flex"
          gap="20px"
          position="absolute"
          background="white"
          width="169px"
          boxShadow="5px 10px 30px rgba(97, 49, 0, 0.15)"
          borderRadius="12px"
          padding="1rem"
          top="425px"
          left="145px"
        >
          <Image src={pinImage.src} />
          <Text fontWeight={400} color="#333333" fontSize="26px">
            CDMX
          </Text>
        </Box>
      </Box>

      <Box position="relative">
        <Image
          src={patternImage2.src}
          position="absolute"
          top="0px"
          right="0px"
        />
        <Box
          padding="10px"
          background="#5EAE53"
          width="63px"
          borderRadius="8px"
          color="white"
        >
          MAPA
        </Box>
        <Text
          width="50%"
          fontSize="56px"
          fontWeight={700}
          color="black"
          marginTop="18px"
          marginBottom="14px"
        >
          Encuentra en el mapa las mejores fondas
        </Text>
        <Text
          fontSize="16px"
          fontWeight={400}
          color="rgba(51, 51, 51, 0.501557)"
        >
          Encuentra las fondas cercanas por sí quieres hacer pick up directo en
          las tiendas.{" "}
        </Text>
        <Box display="flex" gap="30px" marginTop="21px">
          <Box position="relative">
            <Input
              placeholder="Tu código postal"
              background="white"
              border="1px solid #DADADA"
              borderRadius="12px"
              _focus={{
                outline: "none",
                border: "0",
              }}
              height="48px"
              padding="1rem"
            />
            <Box position="absolute" zIndex={1} top="15px" right="9px">
              <Image src={pinImage2.src} />
            </Box>
          </Box>

          <Box
            cursor="pointer"
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
            Buscar en mapa
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
