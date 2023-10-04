import React from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Navbar2 from "../components/Navbar2";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Navbar2 />
      <Box w={{ base: "85%", md: "30%" }} m="auto" mt="10">
        <Box textAlign="center">
          <Text
            fontFamily={"Bebas Neue"}
            letterSpacing="2px"
            textTransform="uppercase"
            fontWeight="700"
            fontSize="25px"
            mt="3"
          >
            BECOME A NIKE MEMBER
          </Text>
        </Box>

        <Box mt="8">
          <Box>
            <Input
              position="static"
              borderColor="#989898"
              type="text"
              placeholder="Full Name"
            />
          </Box>
          <Box mt="5">
            <Input
              position="static"
              borderColor="#989898"
              type="email"
              placeholder="Email Address"
            />
          </Box>

          <Box mt="5">
            <Input
              position="static"
              borderColor="#989898"
              type="password"
              placeholder="Password"
            />
          </Box>

          <Flex mt="5" alignItems="center" w="100%" gap="5">
            <Flex
              p="2"
              w="100%"
              border="1px solid #989898"
              borderRadius="md"
              alignItems="center"
              justifyContent="center"
              color="#767b8b"
              cursor="pointer"
            >
              Men
            </Flex>
            <Flex
              p="2"
              w="100%"
              border="1px solid #989898"
              borderRadius="md"
              alignItems="center"
              justifyContent="center"
              color="#767b8b"
              cursor="pointer"
            >
              Women
            </Flex>
          </Flex>
          <Text mt="3" fontSize="14px" color="#757575" textAlign="center">
            By creating an account, you agree to Nike's Privacy Policy and Terms
            of Use.
          </Text>

          <Button
            mt="8"
            w="100%"
            bg={"black"}
            color={"#ffffff"}
            _hover={{
              bg: "#444444",
            }}
            position="static"
            fontWeight="500"
          >
            SIGN UP
          </Button>
          <Text mt="3" fontSize="14px" color="#757575" textAlign="center">
            Already a Member?{" "}
            <Link to="/signin">
              <u style={{ color: "black" }}>Sign In</u>
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
