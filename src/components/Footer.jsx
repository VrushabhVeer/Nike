import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box w="100%" bg="#111111" mt="1px" color="#FFFFFF">
      <SimpleGrid
        w="80%"
        m="auto"
        columns={[1, 2, 3, 4]}
        spacing="40px"
        py="10"
      >
        <Box fontWeight="500" fontSize="14px">
          <Text>FIND A STORE</Text>
          <Text mt="3">BECOME A MEMBER</Text>
          <Text mt="3">SIGN UP FOR EMAIL</Text>
          <Text mt="3">SEND US FEEDBACK</Text>
          <Text mt="3">STUDENT DISCOUNTS</Text>
        </Box>
        <Box>
          <Text fontWeight="500" fontSize="14px" color="#f2f2f2">
            GET HELP
          </Text>
          <Box color={"#7E7E7E"} fontSize="13px" mt="3">
            <Text _hover={{ color: "#FFFFFF" }}>Order Status</Text>
            <Text _hover={{ color: "#FFFFFF" }} mt="2">
              Delivery
            </Text>
            <Text _hover={{ color: "#FFFFFF" }} mt="2">
              Returns
            </Text>
            <Text _hover={{ color: "#FFFFFF" }} mt="2">
              Payment Option
            </Text>
            <Text _hover={{ color: "#FFFFFF" }} mt="2">
              Contact Us
            </Text>
            <Text _hover={{ color: "#FFFFFF" }} mt="2">
              Inquiries
            </Text>
          </Box>
        </Box>
        <Box>
          <Text fontWeight="500" fontSize="14px" color="#f2f2f2">
            ABOUT US
          </Text>
          <Box color={"#7E7E7E"} fontSize="13px" mt="3">
            <Text _hover={{ color: "#FFFFFF" }}>News</Text>
            <Text _hover={{ color: "#FFFFFF" }} mt="2">
              Careers
            </Text>
            <Text _hover={{ color: "#FFFFFF" }} mt="2">
              Investers
            </Text>
            <Text _hover={{ color: "#FFFFFF" }} mt="2">
              Sustainability
            </Text>
          </Box>
        </Box>
        <Box>
          <Text fontWeight="500" fontSize="14px" color="#f2f2f2">
            FOLLOW US
          </Text>
          <Flex
            gap="4"
            fontSize="20px"
            color={"#7E7E7E"}
            mt="3"
            cursor="pointer"
          >
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-square-instagram"></i>
          </Flex>
        </Box>
      </SimpleGrid>

      <Box
        p="3"
        fontSize="14px"
        textAlign="center"
        borderTop="1px solid #7E7E7E"
      >
        <Text fontSize="14px" color={"#7E7E7E"} _hover={{ color: "#FFFFFF" }}>
          © {year}. Made By Vrushabh Veer
        </Text>
      </Box>
    </Box>
  );
}
