import {
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import AccessibleLink from "../AccessibleLink";

const Navbar = () => {
  const [underline, setUnderline] = useState(false);
  const router = useRouter();
  return (
    <Container
      as={Flex}
      maxWidth="6xl"
      justify="space-between"
      align="center"
      mt="24px"
      height="55px"
    >
      <div
        onMouseOver={() => setUnderline(true)}
        onMouseOut={() => setUnderline(false)}
        style={{ borderBottom: underline ? "1px solid #fff" : "" }}
      >
        <AccessibleLink href="/">
          <Flex alignItems="center" flexDirection="row">
            sehyun
            <Heading
              fontSize="30px"
              lineHeight="55px"
              fontWeight="400"
              ml="6px"
            >
              ✌︎
            </Heading>
          </Flex>
        </AccessibleLink>
      </div>
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
    </Container>
  );
};

export default Navbar;
