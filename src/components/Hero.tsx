import { Box } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box position="absolute" bottom="20" w="60%" ml="10%">
      <Heading fontSize="42px" lineHeight="55px" fontWeight="400">
        Front-end developer, blockchain enthusiast, learner
      </Heading>
    </Box>
  );
};

export default Hero;
