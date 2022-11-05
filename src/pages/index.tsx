import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

const PROJECTS = [
  {
    name: "Slingshot Finance",
    description: "More than just a trading platform",
    href: "https://app.slingshot.finance/",
  },
  {
    name: "Slingshot NFT Marketplace",
    description:
      "In-app NFT marketplace for trading Slingshot 2099 Avatar NFTs",
    href: "https://app.slingshot.finance/nfts",
  },
  {
    name: "Slingshot Mobile Waitlist",
    description:
      "Dashboard to view rank, prizes, and more for Slingshot's mobile waitlist program (2 million+ users)",
    href: "https://waitlist.slingshot.finance/V240BWLME5RW",
  },
  {
    name: "uni.vote",
    description:
      "Gasless voting for Uniswap governance (Uniswap Grants Recipient)",

    href: "https://uni.vote/",
  },
  {
    name: "dydx.vote",
    description: "Gasless voting for dYdX governance (dYdX Grants Recipient)",

    href: "https://dydx.vote/",
  },
  {
    name: "Modu",
    description:
      "Dashboard to compare strategies using options powered by Opyn (Opyn Grants Recipient)",
    href: "https://modu-finance.vercel.app/",
  },
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
    name: "Satchel Finance",
    description: "DeFi for unbanked school communities",
    href: "https://satchel.finance/",
  },
  {
    name: "Ptolemy",
    description:
      "PoC for an on-chain reputation system for validators in the Cosmos ecosystem (CalHacks 9.0 Winner)",
    href: "https://github.com/sehyunc/ptolemy",
  },
  {
    name: "OKDex",
    description: "DEX Aggregator using the OKEx API",
    href: "https://okswap.vercel.app/",
  },
  {
    name: "B@BCoin",
    description: "POAP NFTs for Blockchain at Berkeley members",
    href: "https://babcoin-571e2.web.app/",
  },
  {
    name: "Relentlo",
    description: "Revolutionizing brand and ad experiences in games",
    href: "https://relentlo.com/home",
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
    </>
  );
};

export default Home;
