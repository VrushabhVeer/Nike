import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import hero from "../assets/hero.jpg";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* top image */}
      <Box w="100%" position="relative">
        <Image
          w="100%"
          h="80vh"
          src={hero}
          objectFit="cover"
          alt="hero"
          loading="lazy"
        />

        <Box
          position="absolute"
          top={{base:"60%", md:"25%"}}
          left={{ base: "10", md: "20" }}
          textAlign="left"
          color="#f2f2f2"
        >
          <Box>
            <Text>Nike Invincible</Text>
            <Heading
              fontFamily={"Bebas Neue"}
              letterSpacing="2px"
              textTransform="uppercase"
              fontWeight="700"
              fontSize={{ base: "35px", md: "60px" }}
            >
              Feel It to Believe It
            </Heading>
            <Text w={{ base: "90%", md: "70%" }}>
              Introducing Lightweight ZoomX cushioning through every mile-run in
              the <u>Nike Invincible.</u>
            </Text>
            <Button
              mt="8"
              bg="#f2f2f2"
              px="8"
              _hover={{ bg: "#d4e9ff" }}
              color="black"
              rounded="full"
              fontWeight="500"
            >
              Shop Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Nike x PSG */}

      <Box m="auto" mt="16" w="90%">
        <Text fontSize="20" fontWeight="500">
          The Latest
        </Text>

        <Flex gap="5" mt="2" flexDirection={{ base: "column", md: "row" }}>
          <Box w={{ base: "100%", md: "55%" }}>
            <Image
              w="100%"
              src="https://www.soccerbible.com/media/79991/nike-jordan-psg-soccerbible_0010_layer-1.jpg"
              alt="latest-1"
              loading="lazy"
            />
          </Box>

          <Flex w={{ base: "100%", md: "45%" }} gap="5">
            <Box>
              <Image
                src="https://www.soccerbible.com/media/80044/psg-jumpman-mbappe.jpg"
                alt="Latest-2"
                loading="lazy"
              />
            </Box>
            <Box>
              <Image
                src="https://www.soccerbible.com/media/80022/psg-jumpman-products-13.jpg"
                alt="Latest-3"
                loading="lazy"
              />
            </Box>
          </Flex>
        </Flex>

        <Box textAlign="center">
          <Text
            mt="5"
            fontFamily={"Bebas Neue"}
            letterSpacing="2px"
            textTransform="uppercase"
            fontWeight="700"
            fontSize={{ base: "35px", md: "60px" }}
          >
            Nike x Paris Saint German
          </Text>
          <Text>
            The new Nike x Paris Saint-German Collection draws on the light that
            Paris shines on the world stage.
          </Text>
          <Button
            mt="5"
            bg="black"
            px="8"
            _hover={{ bg: "#444444" }}
            color="#ffffff"
            rounded="full"
            fontWeight="500"
          >
            Shop Now
          </Button>
        </Box>
      </Box>

      {/* Nike x Lebron */}

      <Box m="auto" mt="16" w="90%">
        <Text fontSize="20" fontWeight="500">
          Featured
        </Text>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          gap="5"
          mt="2"
        >
          <Box>
            <Image
              src="https://cdn.dynamicyield.com/api/8766411/images/77ef0678fa06__0009_230110_shot_12_2189_v6.jpg"
              alt="featured-1"
              loading="lazy"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.dynamicyield.com/api/8766411/images/1a2ccc0c11f56__0012_230110_shot_06_1384_v5.jpg"
              alt="featured-2"
              loading="lazy"
            />
          </Box>
          <Box>
            <Image
              src="https://cdn.dynamicyield.com/api/8766411/images/212b07b4aafb5__0002_230110_shot_17_3494_mask_v3.jpg"
              alt="featured-3"
              loading="lazy"
            />
          </Box>
        </Flex>

        <Box textAlign="center">
          <Text
            mt="5"
            fontFamily={"Bebas Neue"}
            letterSpacing="2px"
            textTransform="uppercase"
            fontWeight="700"
            fontSize={{ base: "35px", md: "60px" }}
          >
            Lebron x Liverpool FC
          </Text>
          <Text>
            One Of basketball's biggest stars joins forces with the world's
            greatest football fammily.
          </Text>
          <Button
            mt="5"
            bg="black"
            px="8"
            _hover={{ bg: "#444444" }}
            color="#ffffff"
            rounded="full"
            fontWeight="500"
          >
            Shop Collection
          </Button>
        </Box>
      </Box>

      {/* men women shoes */}

      <Box w="90%" m="auto" mt="20">
        <Text fontSize="20" fontWeight="500">
          More From Nike
        </Text>

        <Flex gap="5" mt="2" flexDirection={{ base: "column", md: "row" }}>
          <Box w="100%" position="relative">
            <Image
              w="100%"
              src="https://static.nike.com/a/images/w_960,c_limit,f_auto/d7129660-b612-47dc-9940-b93bad521c78/nike-x-st%C3%BCssy-apparel-collection-release-date.png"
              alt="men"
              loading="lazy"
            />
            <Box position="absolute" bottom="8" left="10">
              <Link to="/mens">
                <Button
                  bg="#ffffff"
                  px="8"
                  _hover={{ bg: "#cecece" }}
                  color="black"
                  fontWeight="500"
                  rounded="full"
                >
                  Men
                </Button>
              </Link>
            </Box>
          </Box>

          <Box w="100%" position="relative">
            <Image
              w="100%"
              src="https://static.nike.com/a/images/w_960,c_limit,f_auto/c19c67ef-321c-4556-99c8-c997fd9b40db/nike-x-st%C3%BCssy-apparel-accessories-collection-release-date.jpg"
              alt="women"
              loading="lazy"
            />
            <Box position="absolute" bottom="8" left="10">
              <Link to="/womens">
                <Button
                  bg="#ffffff"
                  px="8"
                  _hover={{ bg: "#cecece" }}
                  color="black"
                  fontWeight="500"
                  rounded="full"
                >
                  Women
                </Button>
              </Link>
            </Box>
          </Box>

          <Box w="100%" position="relative">
            <Image
              w="100%"
              src="https://static.nike.com/a/images/w_960,c_limit,f_auto/816f1a78-b1bb-4b3d-bca9-86cddb46e963/air-jordan-1-low-x-travis-scott-#ffffff-phantom-dm7866-001-release-date.jpg"
              alt="shoes"
              loading="lazy"
            />
            <Box position="absolute" bottom="8" left="10">
              <Link to="/shoes">
                <Button
                  bg="#ffffff"
                  px="8"
                  _hover={{ bg: "#cecece" }}
                  color="black"
                  fontWeight="500"
                  rounded="full"
                >
                  Shoes
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
