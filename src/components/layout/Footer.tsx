import {
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import AccessibleLink from "../AccessibleLink";

const Footer = () => {
  return (
    <Container
      as={Flex}
      maxWidth="6xl"
      justify="space-between"
      align="center"
      mt="24px"
      height="55px"
    >
      <Flex>
        <Text color="#8f9ba8">
          © 2022 — Built with{" "}
          <Text as="span" color="white">
            Next
          </Text>{" "}
          &{" "}
          <Text as="span" color="white">
            Vercel
          </Text>
        </Text>
      </Flex>
      <HStack spacing="3" align="center">
        <AccessibleLink href="https://twitter.com/sehyunchung" isExternal>
          <IconButton icon={<Icon as={RiTwitterLine} />} aria-label="twitter" />
        </AccessibleLink>
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
      </HStack>
    </Container>
  );
};

export default Footer;
