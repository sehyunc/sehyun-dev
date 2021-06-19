import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpoint,
} from "@chakra-ui/react";
import { RiGithubLine, RiLinkedinLine, RiTwitterLine } from "react-icons/ri";
import AccessibleLink from "../AccessibleLink";

const Footer = () => {
  const b = useBreakpoint();
  console.log("🚀 ~ file: Footer.tsx ~ line 7 ~ Footer ~ b", b);
  return (
    <Flex
      align="center"
      justify={{
        base: "space-between",
        sm: "center",
        md: "space-between",
        lg: "space-between",
      }}
      w="100%"
      direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
    >
      <Flex ml={{ base: "0", sm: "0", md: "10%", lg: "10%" }}>
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
      <HStack
        spacing="3"
        align="center"
        mr={{ base: "0", sm: "0", md: "10%", lg: "10%" }}
        mt={{ base: 6, sm: 6, md: "0", lg: "0" }}
      >
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
