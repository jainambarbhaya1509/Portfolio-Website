import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Loader from "./assets/Loader";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer"
import DownloadCV from "./assets/DownloadCV";

function App() {

  const [isDOMRendered, setIsDOMRendered] = React.useState(false);

  React.useEffect(() => {
    setIsDOMRendered(true);
  }, []);

  if (!navigator.onLine || !isDOMRendered) {
    return <Loader />;
  }

  return (
    <div style={{ backgroundColor: "#1A202C" }} className="media">
      <ChakraProvider>
        <Header />
        <Body />
        <DownloadCV />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
