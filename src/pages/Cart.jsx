import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import { Link } from "react-router-dom";
import axios from "axios";
import sad from "../assets/sad.png";
import remove from "../assets/trash-can.png";

const Cart = () => {
  const [show, setShow] = useState(true);
  const [data, setData] = useState([]);
  const toast = useToast();

  const fetchCartData = () => {
    axios
      .get("http://localhost:8000/cart")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const showHide = () => {
    setShow(false);
  };

  let total_price = 0;

  data.forEach((prod) => {
    total_price += Number(prod.price) * prod.qty;
  });

  const onDelete = (i) => {
    console.log(i);
    axios
      .delete(`http://localhost:8000/cart/delete/${i}`)
      .then((res) => {
        console.log(res);
        fetchCartData();
        toast({
          title: "Removed from Cart",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar2 />
      <Box w="85%" m="auto" mt="8" display={{ base: "", md: "none" }}>
        <Text fontSize="20px" fontWeight="500">
          Your Bag
        </Text>
        <Flex
          alignItems="center"
          gap="3"
          pb="1"
          borderBottom="1px solid #989898"
        >
          <Text>Items {data.length}</Text>
          <Text fontSize="20px">/</Text>
          <Text>Total: ₹ {total_price}</Text>
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
          <Text
            fontSize="20px"
            display={{ base: "none", md: "flex" }}
            pb="1"
            borderBottom="1px solid #989898"
            fontWeight="500"
          >
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
          {data.length === 0 ? (
            <Flex alignItems="center" gap="3" mt="10">
              <Text fontSize="20px" fontWeight="500">
                There are no items in your bag.
              </Text>

              <Image w="6" src={sad} alt="sad_face" loading="lazy" />
            </Flex>
          ) : (
            data.map((item) => (
              <Flex
                alignItems="center"
                gap="5"
                mt={{ base: "5", md: "0" }}
                key={item.id}
                borderBottom="1px solid #cecece"
              >
                <Box w={{ base: "40%", md: "25%" }}>
                  <Image src={item.img1} alt="product_img" loading="lazy" />
                </Box>

                <Box w={{ base: "60%", md: "50%" }}>
                  <Text fontWeight="bold" fontSize="17px">
                    {item.title}
                  </Text>
                  <Text color="#7f7975">{item.category}</Text>

                  <Text fontSize="17px" mt="1" fontWeight="500">
                    MRP: ₹ {item.price}
                  </Text>

                  <Flex gap="2" alignItems="center">
                    <Flex alignItems="center">
                      <Text color="#7f7975">Quantity</Text>
                      <Select color="#7f7975" border="none">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Select>
                    </Flex>

                    <Text color="#7f7975">Size {item.size}</Text>
                  </Flex>

                  <Box mt="2">
                    <Image
                      cursor="pointer"
                      w="6"
                      onClick={() => onDelete(item._id)}
                      src={remove}
                      alt="delete"
                      loading="lazy"
                    />
                  </Box>
                </Box>
              </Flex>
            ))
          )}
        </Box>

        <Box w={{ base: "100%", md: "70%" }}>
          <Text
            fontSize="20px"
            pb="1"
            borderBottom={{ base: "none", md: "1px solid #989898" }}
            fontWeight="500"
          >
            Order Summary
          </Text>
          <Box mt="4">
            <Flex justifyContent="space-between">
              <Text color="#757575">Subtotal</Text>
              <Text color="#757575">₹ {total_price}</Text>
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
              <Text fontSize="18px">₹ {total_price + 200}</Text>
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

          <Link to="/wishlist">
            <Text mt="5" color="#757575" textDecoration="underline">
              Go to wishlist
            </Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Cart;
