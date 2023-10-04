import { Box } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const Loading = () => {
  return (
    <Box w={{ base: "50%", md: "20%" }} m="auto" mt="5">
      <Player
        autoplay
        loop
        src="https://lottie.host/1e3f24b5-5ac9-47d4-b643-f446a7a12ed5/ybDGkhKgVM.json"
      ></Player>
    </Box>
  );
};

export default Loading;
