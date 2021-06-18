import { Text, Box, Container, Heading } from "@chakra-ui/react";
import AccessibleLink from "../components/AccessibleLink";

const About = () => {
  return (
    <Container h="100%" pt="20%">
      <Heading mb={12}>About Me</Heading>
      <Text>
        Hey there! I&apos;m currently a junior at UC Berkeley pursuing a major
        in Computer Science and a minor in Data Science.
      </Text>
      <br />
      <Text>
        I spend my time designing interfaces and building them, learning about
        blockchain and decentralized finance, or thinking of new ways to be an
        entrepreneur, among other things.
      </Text>
      <br />
      <Text>
        Here&apos;s my{" "}
        <AccessibleLink
          href="https://drive.google.com/file/d/1RLTWrqqU7na55IWRoXhWLJZm13KPBxDH/view?usp=sharing"
          isExternal
          decoration
        >
          resume
        </AccessibleLink>
        .
      </Text>
      <br />
      <Text>{"Enjoy my piece of the internet :)"}</Text>
    </Container>
  );
};

export default About;
