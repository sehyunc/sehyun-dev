import { Box, Flex, Text } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const PROJECTS = [
  {
    name: "Every Day Options",
    description: "Learn about options from Opyn",
    href: "https://everydayoptions.vercel.app/",
  },
  {
    name: "StableSims",
    description: "Investigation of MakerDAO's Black Thursday Event",
    href: "https://github.com/BerkeleyBlockchain/bab-stablesims",
  },
  {
    name: "Calypso Finance",
    description: "Next generation loans",
    href: "https://calypsofi.com/",
  },
];

const Home = () => {
  return (
    <>
      <Box position="relative" w="100%" h="100vh">
        <Hero />
      </Box>
      <Box w="100%" mx="auto" align="center" position="relative" my="100px">
        {PROJECTS.map(({ name, description, href }) => (
          <ProjectCard
            name={name}
            description={description}
            href={href}
            key="name"
          />
        ))}
      </Box>
      <Box w="100%" mx="auto" position="relative" h="100px">
        <Footer />
      </Box>
    </>
  );
};

export default Home;
