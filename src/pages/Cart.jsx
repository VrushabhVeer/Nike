import { Box, Flex, Text, Button, Image, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [show, setShow] = useState(true);

  const showHide = () => {
    setShow(false);
  };

  return (
    <>
      <Navbar2 />
      <Box w="85%" m="auto" mt="8" display={{ base: "", md: "none" }}>
        <Text fontSize="20px">Bag</Text>
        <Flex alignItems="center" gap="3" pb="1" borderBottom="1px solid #989898">
          <Text>Items 1</Text>
          <Text fontSize="20px">/</Text>
          <Text>Total ₹ 12,300</Text>
        </Flex>
      </Box>

      <Flex
        w={{ base: "85%", md: "75%" }}
        m="auto"
        gap={{ base: "10", md: "20" }}
        mt={{ base: "5", md: "10" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box w="100%">
          <Text fontSize="20px" display={{ base: "none", md: "flex" }} pb="1" borderBottom="1px solid #989898">
            Your Bag
          </Text>

          <Flex
            w="100%"
            p="3"
            bg="#f5f5f5"
            justifyContent="space-between"
            display={show === false ? "none" : "flex"}
          >
            <Box>
              <Text fontWeight="500" fontSize="15px">
                Free Delivery
              </Text>
              <Text fontSize="14px">
                Applies to orders of ₹ 14 000.00 or more.
              </Text>
            </Box>

            <Box cursor="pointer" onClick={showHide}>
              <i className="fa-solid fa-xmark"></i>
            </Box>
          </Flex>

          <Flex alignItems="center" gap="5" mt={{ base: "5", md: "0" }}>
            <Box w={{ base: "40%", md: "50%" }}>
              <Image
                src="https://secure-images.nike.com/is/image/DotCom/DV2113_100?v=4b167ff06f5335d61363aee663c3161c"
                alt="product_img"
              />
            </Box>

            <Box w={{ base: "60%", md: "50%" }}>
              <Text fontWeight="bold" fontSize={{ base: "16px", md: "18px" }}>
                Nike Air Max Dawn SE Men's Shoes
              </Text>
              <Text mt="1">Size UK 7</Text>
              <Text mt="1">₹ 11 895.00</Text>

              <Flex gap="2" alignItems="center" w="25%">
                <Text>Qty</Text>
                <Select border="none">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Select>
              </Flex>

              <Box mt="2">
                <Image
                  w="6"
                  src="https://cdn-icons-png.flaticon.com/512/4387/4387288.png"
                  alt="delete"
                />
              </Box>
            </Box>
          </Flex>
        </Box>

        <Box w={{ base: "100%", md: "70%" }}>
          <Text fontSize="20px" pb="1" borderBottom={{ base: "none", md: "1px solid #989898" }}>Order Summary</Text>
          <Box mt="4">
            <Flex justifyContent="space-between">
              <Text color="#757575">Subtotal</Text>
              <Text color="#757575">₹ 12,0000</Text>
            </Flex>

            <Flex justifyContent="space-between" mt="3">
              <Text color="#757575">Delivery/Shipping</Text>
              <Text color="#757575">₹ 200</Text>
            </Flex>

            <Flex
              justifyContent="space-between"
              mt="3"
              borderTop="1px solid #989898"
              pt="2"
            >
              <Text fontSize="18px">Total</Text>
              <Text fontSize="18px">₹ 12,2000</Text>
            </Flex>
            <Link to="/checkout">
              <Button
                mt="10"
                bg="black"
                px="8"
                py="6"
                w="100%"
                _hover={{ bg: "#444444" }}
                color="#ffffff"
                rounded="full"
                fontWeight="500"
                position="static"
              >
                Continue
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Cart;

