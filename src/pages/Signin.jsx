import React from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import Navbar2 from "../components/Navbar2";
import { Link } from "react-router-dom";

const Signin = () => {
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
            YOUR ACCOUNT FOR EVERYTHING NIKE
          </Text>
        </Box>

        <Box mt="8">
          <Box>
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
          <Text mt="3" fontSize="14px" color="#757575" textAlign="center">
            By logging in, you agree to Nike's Privacy Policy and Terms of Use.
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
            SIGN IN
          </Button>
          <Text mt="3" fontSize="14px" color="#757575" textAlign="center">
            Not a Member?{" "}
            <Link to="/signup">
              <u style={{ color: "black" }}>Sign Up</u>
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Signin;
