import React from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      px="100px"
      zIndex="99999"
      h="160px"
      w="100%"
      position="fixed"
      top="0"
      left="0"
      bg="#000"
    >
      <Text>Sehyun</Text>
      <IconButton icon={<FiMenu />} aria-label="menu" />
    </Flex>
  );
};

export default Navbar;
