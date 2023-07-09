import React, { useEffect, useState } from "react";
import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";

function AboutMe({ header, content }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 700) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerStyle = {
    transition: "opacity 0.3s ease-out", // Add a smooth transition effect
    opacity: isHidden ? 0 : 1, // Set opacity based on "isHidden" state
  };

  return (
    <div className="aboutme-container" style={containerStyle}>
      <div>
        <Stack spacing="4" align="center">
          <Heading color="white" fontSize="30px" marginTop="30px">
            {header}
            <Divider marginTop="10px" />
          </Heading>
          <Box borderRadius="10px" p="20px">
            <Text
              color="white"
              fontSize="19px"
              paddingRight="15px"
              paddingLeft="15px"
              paddingTop="15px"
              textAlign="center"
              wordBreak="break-word"
              lineHeight="2"
            >
              {content}
            </Text>
          </Box>
        </Stack>
      </div>
    </div>
  );
}

export default AboutMe;
