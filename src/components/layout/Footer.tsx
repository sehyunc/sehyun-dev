import { Box, Icon, IconButton, Flex, Text, HStack } from "@chakra-ui/react";
import AccessibleLink from "../AccessibleLink";
import { RiGithubLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
  return (
    <Flex align="center" justify="space-between" w="100%">
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
        </Text>
      </Flex>
      <HStack spacing="3" align="center" mr="10%">
        <AccessibleLink href="https://git.io/sehyun" isExternal>
          <IconButton icon={<Icon as={RiGithubLine} />} aria-label="github" />
        </AccessibleLink>
        <AccessibleLink
          href="https://www.linkedin.com/in/sehyun-chung/"
          isExternal
        >
          <IconButton
            icon={<Icon as={RiLinkedinLine} />}
            aria-label="linkedin"
          />
        </AccessibleLink>
        <AccessibleLink href="https://twitter.com/sehyunchung" isExternal>
          <IconButton icon={<Icon as={RiTwitterLine} />} aria-label="twitter" />
        </AccessibleLink>
      </HStack>
    </Flex>
  );
};

export default Footer;
