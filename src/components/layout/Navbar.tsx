import {
  Box,
  Flex,
  Heading,
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
import AccessibleLink from "../AccessibleLink";

const Navbar = () => {
  const router = useRouter();
  return (
    <Flex
      justify="space-between"
      align="center"
      px={{ base: "10%", sm: "10%", md: "100px", lg: "100px" }}
      zIndex="99999"
      h="10%"
      w="100%"
      position="fixed"
      // top="0"
      // left="0"
      bg="#000"
    >
      <AccessibleLink href="/" decoration>
        <Flex alignItems="center" flexDirection="row">
          sehyun
          <Heading fontSize="30px" lineHeight="55px" fontWeight="400" ml="6px">
            ✌︎
          </Heading>
        </Flex>
      </AccessibleLink>
      <Menu>
        <MenuButton variant={"link"} cursor={"pointer"}>
          <IconButton icon={<FiMenu />} aria-label="menu" />
        </MenuButton>
        <MenuList bg="#db3933">
          <MenuItem onClick={() => router.push("/")} bg="none">
            home
          </MenuItem>
          <MenuItem onClick={() => router.push("/about")} bg="none">
            about me
          </MenuItem>
          <MenuItem
            as="a"
            bg="none"
            href="https://twitter.com/sehyunchung"
            rel="noopener noreferrer"
          >
            twitter
          </MenuItem>
          <MenuItem
            as="a"
            bg="none"
            href="https://git.io/sehyun"
            rel="noopener noreferrer"
          >
            github
          </MenuItem>
          <MenuItem
            as="a"
            bg="none"
            href="https://www.linkedin.com/in/sehyun-chung/"
            rel="noopener noreferrer"
          >
            linkedin
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
