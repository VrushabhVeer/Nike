import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar2 from "../components/Navbar2";

const ProductDetailsShoe = () => {
  const toast = useToast();
  const params = useParams();
  const [data, setData] = useState({});
  const [size, setSize] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/shoe/${params.productId}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params]);

  const handleCart = () => {
    const payload = {
      ...data,
      size,
      qty: 1,
    };

    const url = "http://localhost:8000/cart/add_cart";

    axios.post(url, payload)
      .then((response) => {
        toast({
          title: "Added To Cart",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleWishlist = () => {
    const payload = {
      ...data,
    };

    const url = "http://localhost:8000/wishlist/add_wishlist";

    axios.post(url, payload)
      .then((response) => {
        toast({
          title: "Added To Wishlist",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <Navbar2 />

      <Flex
        w={{ base: "100%", md: "95%" }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
      >
        <SimpleGrid columns={[1, 1, 2, 2]} spacing="1px" w="100%">
          <Box>
            <Image src={data.img1} alt="product_img1" loading="lazy" />
          </Box>
          <Box>
            <Image src={data.img2} alt="product_img2" loading="lazy" />
          </Box>
          <Box>
            <Image src={data.img3} alt="product_img3" loading="lazy" />
          </Box>
          <Box>
            <Image src={data.img4} alt="product_img4" loading="lazy" />
          </Box>
        </SimpleGrid>

        <Box
          w={{ base: "100%", md: "75%", lg: "45%" }}
          p={{ base: "7", md: "10" }}
        >
          <Text color="#ffc208" fontSize="18px">
            {data.reviews}
          </Text>
          <Text fontSize={{ base: "20px", md: "23px" }} fontWeight="600">
            {data.title}
          </Text>
          <Text mt="-1">{data.title2}</Text>
          <Text fontWeight="500" fontSize="18px" mt="3">
            MRP : ₹ {data.price}
          </Text>
          <Text fontSize="15px" color="#5f5f5f">
            incl. of taxes
          </Text>
          <Text fontSize="15px" color="#5f5f5f">
            (Also includes all applicable duties)
          </Text>

          <Box mt={{ base: "10", md: "10" }} w="100%">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontWeight="500" fontSize="15px">
                Select Size
              </Text>{" "}
              <Link to="/size_guide">
                <Text fontWeight="500" fontSize="15px">
                  <u>Size Guide</u>
                </Text>
              </Link>
            </Flex>

            <HStack w="100%" spacing="3" direction="row" align="center" mt="2">
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="6"
                fontWeight="normal"
                w="100%"
                bg="white"
                border="1px solid #c3bfbf"
                fontSize="15px"
                _hover={{ bg: "white" }}
                borderRadius="6"
              >
                6
              </Button>
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="7"
                fontWeight="normal"
                w="100%"
                bg="white"
                border="1px solid #c3bfbf"
                fontSize="15px"
                _hover={{ bg: "white" }}
                borderRadius="6"
              >
                7
              </Button>
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="8"
                fontWeight="normal"
                w="100%"
                bg="white"
                border="1px solid #c3bfbf"
                fontSize="15px"
                _hover={{ bg: "white" }}
                borderRadius="6"
              >
                8
              </Button>
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="9"
                fontWeight="normal"
                w="100%"
                bg="white"
                border="1px solid #c3bfbf"
                fontSize="15px"
                _hover={{ bg: "white" }}
                borderRadius="6"
              >
                9
              </Button>
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="10"
                fontWeight="normal"
                w="100%"
                bg="white"
                border="1px solid #c3bfbf"
                fontSize="15px"
                _hover={{ bg: "white" }}
                borderRadius="6"
              >
                10
              </Button>
              <Button
                position="static"
                onClick={(e) => setSize(e.target.value)}
                value="11"
                fontWeight="normal"
                w="100%"
                bg="white"
                border="1px solid #c3bfbf"
                fontSize="15px"
                _hover={{ bg: "white" }}
                borderRadius="6"
              >
                11
              </Button>
            </HStack>
            <Text color="red" mt="2" fontSize="15px">
              {!size ? (
                <>
                  <i className="fa-solid fa-circle-exclamation" /> Please Select
                  The Size
                </>
              ) : (
                " "
              )}
            </Text>
          </Box>

          <Button
            mt="5"
            bg="black"
            py="7"
            w="100%"
            _hover={{ bg: "#444444" }}
            color="#ffffff"
            rounded="full"
            fontWeight="500"
            fontSize="16px"
            position="static"
            isDisabled={!size}
            onClick={handleCart}
          >
            Add to cart
          </Button>
          <Button
            mt="4"
            bg="white"
            w="100%"
            py="6"
            _hover={{ bg: "white" }}
            color="black"
            rounded="full"
            border="1px solid #c3bfbf"
            fontWeight="500"
            fontSize="16px"
            position="static"
            gap="3"
            onClick={handleWishlist}
          >
            Wishlist <i className="fa-regular fa-heart"></i>
          </Button>

          <Text mt="10">{data.description}</Text>

          <UnorderedList mt="6">
            <ListItem>Color: {data.color}</ListItem>
            <ListItem>Category: {data.category}</ListItem>
          </UnorderedList>
          <Text
            borderTop="1px dashed #c3bfbf"
            pt="2"
            fontSize="15px"
            color="#5f5f5f"
            mt="10"
          >
            {data.productInfo1}
          </Text>
          <Text
            borderTop="1px dashed #c3bfbf"
            pt="2"
            fontSize="15px"
            color="#5f5f5f"
            mt="8"
          >
            {data.productInfo2}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default ProductDetailsShoe;
