import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import nike from "../assets/logo.png";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <Box textAlign="center" w={{ base: "80%", md: "50%" }} m="auto" mt="5">
        <Text fontWeight="bold" fontSize="35">
          Oops!
        </Text>
        <Text fontSize={{ base: "20px", md: "25px" }} mt="3">
          We can't find the page you are looking for.
        </Text>
        <Text fontSize={{ base: "20px", md: "25px" }}>
          Sorry for the inconvenience.
        </Text>
        <Link to="/">
          <Button
            m="5"
            bg={"black"}
            color={"#ffffff"}
            _hover={{
              bg: "#444444",
            }}
            fontWeight="500"
            position="static"
          >
            Continue Shopping
          </Button>
        </Link>
        <Flex justifyContent="center" alignItems="center">
          <Image w={{ base: "100%", md: "70%" }} src={nike} alt="nike" loading="lazy"/>
        </Flex>
      </Box>
    </>
  );
};

export default Error;
