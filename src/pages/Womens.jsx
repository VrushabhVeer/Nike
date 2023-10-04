import React, { useEffect, useState } from 'react'
import Navbar2 from '../components/Navbar2'
import axios from 'axios';
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Loading from '../components/Loading';

const Womens = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://nike-f15h.onrender.com/women")
        .then((res) => {
            setData(res.data);
            setLoading(false);
            console.log(res);
        }).catch((err) => {
            setLoading(false);
            console.log(err);
        })
    }, []);

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
                <SimpleGrid columns={[1, 2, 3, 4]} rowGap="14" columnGap="7">
                    {data.map((item, index) => (
                        <Box key={index}>
                            <Box>
                                <Image src={item.img1} alt="product_img" loading="lazy"/>
                            </Box>

                            <Box mt="3">
                                <Text color="red">{item.type}</Text>
                                <Text mt="2" color="#7b8287" fontSize="18px">
                                    {item.title}
                                </Text>
                                <Text mt="2">
                                    {item.title2}
                                </Text>
                                <Text mt="2">MRP : ₹ {item.price}</Text>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </>
    )
}

export default Womens