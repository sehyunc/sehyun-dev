import { Flex, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Flex ml="10%">
      <Text color="#8f9ba8">
        © 2021 — Built with{" "}
        <Text as="span" color="white">
          Next
        </Text>{" "}
        &{" "}
        <Text as="span" color="white">
          Vercel
        </Text>
        , with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by{" "}
        <Text as="span" color="white">
          Sehyun
        </Text>
      </Text>
    </Flex>
  );
};

export default Footer;
