import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import AccessibleLink from "./AccessibleLink";

type ProjectCardProps = {
  name: string;
  description: string;
  href: string;
};

const ProjectCard = ({ name, description, href }: ProjectCardProps) => {
  return (
    <AccessibleLink href={href} isExternal>
      <Flex
        textAlign="left"
        borderWidth="1px"
        borderColor="#16181A"
        align="center"
        justify="space-between"
        px="72px"
        py="48px"
        _hover={{
          transition: "all .6s ease",
          borderColor: "#8F9BA8",
        }}
        style={{ outline: "none" }}
      >
        <div style={{ outline: "none" }}>
          <Heading mb="6px">{name}</Heading>
          <Text>{description}</Text>
        </div>
        <Icon as={FiArrowUpRight} w={10} h={10} />
      </Flex>
    </AccessibleLink>
  );
};

export default ProjectCard;
