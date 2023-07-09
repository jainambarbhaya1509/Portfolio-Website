import React from "react";
import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material";

function Socials() {
  return (
    <div className="socials-container">
      <Flex direction="column" alignItems="right" justifyContent="right" color="white">
        <Link className="social-link" style={{ margin: "10px 0" }} href="https://www.github.com/jainambarbhaya1509" target="_blank">
          <Box display="flex" alignItems="right" boxShadow="2xl" rounded="md" p={2} className="social-box">
            <GitHub style={{ marginRight: "10px" }} />
            <Text fontWeight="bold" display="inline-block">GitHub</Text>
          </Box>
        </Link>
        <Link className="social-link" style={{ margin: "10px 0" }} href="https://www.linkedin.com/in/jainam-barbhaya-846973266" target="_blank">
          <Box display="flex" alignItems="center" boxShadow="2xl" rounded="md" p={2} className="social-box">
            <LinkedIn style={{ marginRight: "10px" }} />
            <Text fontWeight="bold" display="inline-block">LinkedIn</Text>
          </Box>
        </Link>
        <Link className="social-link" style={{ margin: "10px 0" }} href="https://www.twitter.com/_jainambarbhaya" target="_blank">
          <Box display="flex" alignItems="center" boxShadow="2xl" rounded="md" p={2} className="social-box">
            <Twitter style={{ marginRight: "10px" }} />
            <Text fontWeight="bold" display="inline-block">Twitter</Text>
          </Box>
        </Link>
        <Link className="social-link" style={{ margin: "10px 0" }} href="https://www.instagram.com/_jainambarbhaya" target="_blank">
          <Box display="flex" alignItems="center" boxShadow="2xl" rounded="md" p={2} className="social-box">
            <Instagram style={{ marginRight: "10px" }} />
            <Text fontWeight="bold" display="inline-block">Instagram</Text>
          </Box>
        </Link>
        <style jsx="true">{`
          .socials-container .social-link:hover,
          .socials-container .social-link:focus,
          .socials-container .social-link:active {
            text-decoration: none;
            outline: none;
          }
          
          .social-box:hover {
            transform: scale(1.1); // Example animation style, you can modify it as per your requirements
            transition: transform 0.3s ease-in-out;
          }
        `}</style>
      </Flex>
    </div>
  );
}

export default Socials;
