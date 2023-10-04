import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar2() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={{ base: "5", md: "12" }}
        position="sticky"
        top="0"
        bg="white"
        w="100%"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            variant="ghost"
            _hover={{ variant: "ghost" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/">
                <Image w="63px" src={logo} alt="logo" loading="lazy"/>
              </Link>
            </Box>
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link to="/mens">
              <Text _hover={{ borderBottom: "1px solid" }}>Men</Text>
            </Link>

            <Link to="/womens">
              <Text _hover={{ borderBottom: "1px solid" }}>Women</Text>
            </Link>

            <Link to="/shoes">
              <Text _hover={{ borderBottom: "1px solid" }}>Shoes</Text>
            </Link>
          </HStack>
          <Flex alignItems={"center"} fontSize="18px" gap="6">
            <Image
              w="5"
              src="https://cdn-icons-png.flaticon.com/512/151/151910.png"
              alt="heart"
              loading="lazy"
            />
            <Link to="/cart">
              <Image
                w="5"
                src="https://cdn-icons-png.flaticon.com/512/736/736943.png"
                alt="bag"
                loading="lazy"
              />
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="/mens">
                <Text mt="6">Men</Text>
              </Link>

              <Link to="/womens">
                <Text>Women</Text>
              </Link>

              <Link to="/shoes">
                <Text>Shoes</Text>
              </Link>
              <Text fontSize="14px" color="#757575">
                Become a <u>Nike Member</u> for the best products.
              </Text>

              <Flex alignItems="center" gap="3">
                <Link to="/signup">
                  <Button
                    letterSpacing="0.5px"
                    fontSize="15px"
                    rounded="full"
                    _hover={{ bg: "black" }}
                    bg="black"
                    color="#FFFFFF"
                  >
                    Sign Up
                  </Button>
                </Link>

                <Link to="/signin">
                  <Button
                    letterSpacing="0.5px"
                    fontSize="15px"
                    rounded="full"
                    variant="outline"
                    colorScheme="black"
                  >
                    Sign In
                  </Button>
                </Link>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
