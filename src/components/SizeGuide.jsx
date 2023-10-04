import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text,
} from "@chakra-ui/react";
import React from "react";
import Navbar2 from "./Navbar2";

const SizeGuide = () => {
    return (
        <>
            <Navbar2 />
            <Box w={{ base: "85%", md: "55%" }} m="auto" mt="10">
                <Text fontSize="25px" fontWeight="bold">Size Chart</Text>
                <Text>
                    The measurements on the size chart are body measurements. Find your
                    correct size in the chart below. Scroll horizontally to see more
                    sizes.
                </Text>
                <Text mt="2" fontWeight="bold">All Measurments in cm</Text>

                <TableContainer w="100%" mt="5" border="1px solid #e8e8e7">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Size</Th>
                                <Th>Chest</Th>
                                <Th>Waist</Th>
                                <Th>Hip</Th>
                                <Th>Height</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>S</Td>
                                <Td>86-88</Td>
                                <Td>65-68</Td>
                                <Td>70-72</Td>
                                <Td>170-174</Td>
                            </Tr>
                            <Tr>
                                <Td>M</Td>
                                <Td>88-90</Td>
                                <Td>67-68</Td>
                                <Td>72-76</Td>
                                <Td>174-176</Td>
                            </Tr>
                            <Tr>
                                <Td>L</Td>
                                <Td>90-92</Td>
                                <Td>68-70</Td>
                                <Td>74-76</Td>
                                <Td>174-176</Td>
                            </Tr>
                            <Tr>
                                <Td>XL</Td>
                                <Td>94-96</Td>
                                <Td>72-74</Td>
                                <Td>80-82</Td>
                                <Td>180-184</Td>
                            </Tr>
                            <Tr>
                                <Td>XXL</Td>
                                <Td>96-98</Td>
                                <Td>76-78</Td>
                                <Td>80-82</Td>
                                <Td>186-188</Td>
                            </Tr>
                            <Tr>
                                <Td>XXXL</Td>
                                <Td>100-112</Td>
                                <Td>80-84</Td>
                                <Td>82-84</Td>
                                <Td>190-194</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default SizeGuide;
