import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import Loading from "../components/Loading";
import { Box, Flex, Image, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import remove from "../assets/trash-can.png";

const Wishlist = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const fetchCartData = () => {
    axios
      .get("http://localhost:8000/wishlist")
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const onDelete = (i) => {
    console.log(i);
    axios
      .delete(`http://localhost:8000/wishlist/delete/${i}`)
      .then((res) => {
        console.log(res);
        fetchCartData();
        toast({
          title: "Removed from Wishlist",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return (
      <>
        <Navbar2 />
        <Loading />
      </>
    );
  }
  return (
    <>
      <Navbar2 />

      <Box w="85%" m="auto" mt="10">
        <Text fontSize="20px" fontWeight="500">
          Wishlist
        </Text>
        <SimpleGrid columns={[1, 2, 3, 4]} rowGap="14" columnGap="7" mt="8">
          {data.map((item) => (
            <Box key={item.id}>
              <Box position="relative">
                <Image src={item.img1} alt="product_img" loading="lazy" />
                <Flex
                  position="absolute"
                  top="8px"
                  alignItems="center"
                  justifyContent="center"
                  left="16px"
                  bg="#cecece"
                  borderRadius="50%"
                  w="9"
                  h="9"
                >
                  <Image
                    cursor="pointer"
                    w="5"
                    onClick={() => onDelete(item._id)}
                    src={remove}
                    alt="delete"
                    loading="lazy"
                  />
                </Flex>
              </Box>

              <Link to={`/men/${item._id}`}>
                <Box mt="3">
                  <Text color="red" fontSize="15px">
                    {item.type}
                  </Text>
                  <Text mt="2" fontWeight="500">
                    {item.title}
                  </Text>
                  <Text mt="2" fontWeight="500">
                    MRP : ₹ {item.price}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Wishlist;
