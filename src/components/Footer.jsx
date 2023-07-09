import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <Box as="footer" py={4} color="white" bg="gray.800">
      <Container>
        <Text textAlign="center" fontSize="sm">
          Copywrite &copy; {new Date().getFullYear()}. All rights reserved.
        </Text>
        <Box display="flex" justifyContent="center" mt={2}>
          <a href="https://www.github.com/jainambarbhaya1509" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }}>
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/jainam-barbhaya-846973266" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }}>
            <LinkedIn />
          </a>
          <a href="https://www.instagram.com/_jainambarbhaya" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginRight: '10px' }}>
            <Instagram />
          </a>
          <a href="https://twitter.com/_jainambarbhaya" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
            <Twitter />
          </a>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
