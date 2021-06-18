import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Header from "./Header";
import Footer from "../Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out" w="100%" h="100%" bg="#000">
      <Meta />
      <Navbar />
      <Box as="main">{children}</Box>
      <Box w="100%" mx="auto" h="100px">
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
