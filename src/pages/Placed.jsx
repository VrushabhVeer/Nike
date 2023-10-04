import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar2 from "../components/Navbar2";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const Placed = () => {
  return (
    <>
      <Navbar2 />

      <Box w={{ base: "85%", md: "33%" }} m="auto" mt="10" textAlign="center">
        <Box w="25%" m="auto">
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/private_files/lf30_dfspihm8.json"
          ></Player>
        </Box>
        <Text
          mt="3"
          fontWeight="600"
          fontSize={{ base: "20px", md: "35px" }}
        >
          Order Placed!
        </Text>

        <Box w="100%" mt="5" p="5" borderRadius="md" bg="#111111">
          <Text
            
            fontWeight="600"
            fontSize={{ base: "18px", md: "20px" }}
            color="white"
          >
            Thank you for your order!
          </Text>
          <Text mt="3" color="white">
            The order confirmation has been sent to your email address.
          </Text>

          <Flex mt="5" alignItems="center" justifyContent="center">
            <Image
              w={{ base: "15%", md: "10%" }}
              src="https://cdn-icons-png.flaticon.com/512/873/873388.png"
              alt="email"
              loading="lazy"
            />
          </Flex>
        </Box>

        <Link to="/">
          <Flex alignItems="center" justifyContent="center" gap="3" mt="10">
            <Text
              fontWeight="600"
              fontSize={{ base: "20px", md: "32px" }}
            >
              Continue Shopping
            </Text>
            <Image
              w={{ base: "12", md: "20" }}
              src="https://cdn-icons-png.flaticon.com/512/9495/9495451.png"
              alt="shoe"
              loading="lazy"
            />
          </Flex>
        </Link>
      </Box>
    </>
  );
};

export default Placed;
