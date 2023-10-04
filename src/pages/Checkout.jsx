import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import Navbar2 from "../components/Navbar2";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <Navbar2 />
      {/* accordian */}
      <Accordion w="100%" allowMultiple display={{ base: "", md: "none" }}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="center">
                Order Summary
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Box w="85%" m="auto">
              <Box>
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
                <Text mt="2" fontSize="13px">
                  {" "}
                  your order, including all duties and taxes.
                </Text>
              </Box>

              <Flex gap="5" mt="5" alignItems="center">
                <Box w="100%">
                  <Image
                    src="https://secure-images.nike.com/is/image/DotCom/DV2113_100?v=4b167ff06f5335d61363aee663c3161c"
                    alt="product_img"
                    loading="lazy"
                  />
                </Box>
                <Box w="100%">
                  <Text fontSize="15px">Nike Air Max Dawn SE Men's Shoes</Text>
                  <Text fontSize="15px" mt="1">
                    Qty 1
                  </Text>
                  <Text fontSize="15px" mt="1">
                    Size UK 7
                  </Text>
                  <Text fontSize="15px" mt="1">
                    ₹ 11 895.00
                  </Text>
                </Box>
              </Flex>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* flex */}
      <Flex
        w={{ base: "85%", md: "70%" }}
        m="auto"
        mt={{ base: "8", md: "10" }}
        gap="40"
      >
        <Box w="100%">
          <Text fontSize="20px">Delivery</Text>
          <Text mt="2" color="#757575">
            The address on the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email in due course to obtain a
            copy of your KYC. The KYC will be stored securely and used solely
            for the purpose of clearing customs (including sharing it with
            customs officials) for this order, future orders, and any product
            returns.
            <u>Learn More</u>
          </Text>

          <Box mt="5">
            <Text fontSize="20px">Address Info</Text>

            <Box mt="3">
              <Box>
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="Full Name"
                />
              </Box>
              <Box mt="5">
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="Address Line 1"
                />
              </Box>
              <Box mt="5">
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="Address Line 2"
                />
              </Box>
              <Flex gap="5" mt="5">
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="Pin Code"
                />
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="Locality"
                />
              </Flex>
              <Flex gap="5" alignItems="center">
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  mt="5"
                  placeholder="State"
                />
                <Flex
                  w="100%"
                  mt="5"
                  h="50px"
                  borderRadius="md"
                  p="5"
                  border="1px solid #989898"
                  alignItems="center"
                >
                  <Text color="green">India</Text>
                </Flex>
              </Flex>
            </Box>
          </Box>

          <Box mt="8">
            <Text fontSize="20px">Contact Info</Text>

            <Box mt="3">
              <Box>
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="Email"
                />
                <Text mt="1" fontSize="13px">
                  A confirmation email will be sent after checkout.
                </Text>
              </Box>
              <Box mt="5">
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="Mobile Number"
                />
                <Text mt="1" fontSize="13px">
                  A carrier might contact you to confirm delivery.
                </Text>
              </Box>

              <Link to="/payment">
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
        </Box>

        {/* summary */}
        <Box w="100%" display={{ base: "none", md: "flex" }}>
          <Box>
            <Text fontSize="20px">Order Summary</Text>
            <Box mt="2">
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
              <Text mt="2" fontSize="13px">
                {" "}
                (your order, including all duties and taxes.)
              </Text>
            </Box>

            <Flex gap="5" mt="5" alignItems="center">
              <Box w="100%">
                <Image
                  src="https://secure-images.nike.com/is/image/DotCom/DV2113_100?v=4b167ff06f5335d61363aee663c3161c"
                  alt="product_img"
                />
              </Box>
              <Box w="100%">
                <Text fontSize="15px">Nike Air Max Dawn SE Men's Shoes</Text>
                <Text fontSize="15px" mt="1">
                  Qty 1
                </Text>
                <Text fontSize="15px" mt="1">
                  Size UK 7
                </Text>
                <Text fontSize="15px" mt="1">
                  ₹ 11 895.00
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Checkout;
