import { Box } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box position="absolute" bottom="20" w="60%" ml="10%">
      <Heading fontSize="42px" lineHeight="55px" fontWeight="400">
        hi, i&apos;m sehyun{" "}
        <Text as="span" fontSize="30px" ml="6px">
          ✌︎
        </Text>
        <br />
        <span
          style={{ display: "inline", verticalAlign: "baseline" }}
          role="img"
        >
          🇰🇷 ,{" "}
        </span>
        ny {"->"} ca
        <br />
        cs @ berkeley
        <br />
        president @ blockchain at berkeley
        <br />
        check out what i&apos;ve built below
      </Heading>
    </Box>
  );
};

export default Hero;
