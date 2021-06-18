import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const router = useRouter();
  return (
    <Flex
      justify="space-between"
      align="center"
      px="100px"
      zIndex="99999"
      h="90px"
      w="100%"
      position="fixed"
      // top="0"
      // left="0"
      bg="#000"
    >
      <Text>Sehyun</Text>
      <Menu>
        <MenuButton variant={"link"} cursor={"pointer"}>
          <IconButton icon={<FiMenu />} aria-label="menu" />
        </MenuButton>
        <MenuList bg="#db3933">
          <MenuItem onClick={() => router.push("/")} bg="none">
            Home
          </MenuItem>
          <MenuItem onClick={() => router.push("/about")} bg="none">
            About Me
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
