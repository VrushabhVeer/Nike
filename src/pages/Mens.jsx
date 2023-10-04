import React, { useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import Loading from "../components/Loading";

const Mens = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://nike-f15h.onrender.com/men")
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
        return <Loading />;
    }
    return (
        <>
            <Navbar2 />
            <Box w="85%" m="auto" mt="10">
                <SimpleGrid columns={[1, 2, 3, 4]} rowGap="14" columnGap="7">
                    {data.map((item, index) => (
                        <Box key={index}>
                            <Box>
                                <Image src={item.img1} alt="productImg" loading="lazy" />
                            </Box>

                            <Box mt="3">
                                <Text color="red">{item.type}</Text>
                                <Text mt="2" color="#7b8287" fontSize="18px">
                                    {item.title}
                                </Text>
                                <Text mt="2">MRP : ₹ {item.price}</Text>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </>
    );
};

export default Mens;
