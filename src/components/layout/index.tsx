import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out" w="100%" height="100vh">
      <Meta />
      <Box as="nav">
        <Navbar />
      </Box>
      <Box as="main">{children}</Box>
      <Box
        as="footer"
        w="100%"
        mx="auto"
        h="100px"
        position="absolute"
        bottom="0"
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
