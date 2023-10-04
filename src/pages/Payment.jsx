import React, { useState } from "react";
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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Navbar2 from "../components/Navbar2";
import { Link } from "react-router-dom";

const Payment = () => {
  const [showAlert, setShowAlert] = useState("");

  const showText = () => {
    setShowAlert(
      <Alert status="success" borderRadius="md">
        <AlertIcon />
        Cash on delivey selected as payment method!
      </Alert>
    );
  };
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
                    alt=""
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
      <Flex w={{ base: "85%", md: "70%" }} m="auto" mt="10" gap="40">
        <Box w="100%">
          <Text fontSize="20px">Have a promo code?</Text>

          <Box mt="3">
            <Box>
              <Input
                position="static"
                borderColor="#989898"
                h="50px"
                placeholder="Enter promo code"
              />
            </Box>
          </Box>

          <Box mt="8">
            <Text fontSize="20px">How would you like to pay?</Text>

            <Flex
              w="100%"
              mt="3"
              h="50px"
              borderRadius="md"
              p="5"
              gap="3"
              border="2px solid"
              alignItems="center"
            >
              <Text>Credit or Debit Card</Text>
            </Flex>

            <Text fontSize="20px" mt="8">
              Enter your card details:
            </Text>
            <Box w="100%" mt="3">
              <Box>
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="Name on card"
                />
              </Box>
              <Box mt="5">
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="Card number"
                />
              </Box>
              <Flex gap="5" mt="5">
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="MM/YY"
                />
                <Input
                  position="static"
                  borderColor="#989898"
                  h="50px"
                  placeholder="CVV"
                />
              </Flex>
            </Box>
            <Text mt="4" textAlign="center">
              Or
            </Text>
            <Flex
              w="100%"
              mt="4"
              h="50px"
              borderRadius="md"
              p="5"
              gap="3"
              border="2px solid"
              alignItems="center"
              onClick={showText}
              cursor="pointer"
            >
              <Text>Cash On Delivery</Text>
            </Flex>

            <Box mt="3" fontSize={{ base: "13px", md: "15px" }}>
              {showAlert}
            </Box>

            <Link to="/order_placed">
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
                Place Order
              </Button>
            </Link>
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
                  alt=""
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
        </Box>
      </Flex>
    </>
  );
};

export default Payment;
