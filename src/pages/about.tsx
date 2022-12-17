import { Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container pt={{ base: "30%", sm: "30%", md: "10%", lg: "10%" }}>
      <Heading mb={12}>About Me</Heading>
      <Text>Hey there! I&apos;m Sehyun.</Text>
      <br />
      <Text>
        I spend my time designing/building interfaces and learning about
        blockchain and decentralized finance. I built a lot of things at
        Slingshot Finance, and I like working on open source projects for the
        crypto community.
      </Text>
      <br />
      <Text>
        My crypto journey began in 2019 when I learned about Blockchain at
        Berkeley through some friends and took their Blockchain Fundamentals
        course. Since then, I&apos;ve joined the club where I did all sorts of
        things like research, teaching, building, leading the Xcelerator, and
        more. I&apos;m lucky enough to be president and guide the next
        generation of the club&apos;s members.
      </Text>
      <br />
      <Text>
        {`
        I'm going to add a 'Writings' page soon, because I forgot how
        fun this was. 
        I've been reading about MEV and modular blockchains and thinking about what future blockchains will look like and why it's Cosmos.
        `}
      </Text>
      <br />
      <Text>
        {`
        currently: looking for something to work on next.
        `}
      </Text>
      <br />
      {/* <Text>
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
      <br /> */}
      <Text>{"Enjoy my piece of the internet :)"}</Text>
    </Container>
  );
};

export default About;
