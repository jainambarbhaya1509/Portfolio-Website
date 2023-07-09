import React from "react";
import { FaDownload } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import anime from "animejs/lib/anime.es.js";

import cvPDF from "C:/Users/Jainam Barbhaya/Desktop/portfolio/src/Images/CV/cv.pdf"; // Update the relative path accordingly

const DownloadCV = () => {
  const handleClick = () => {
    // Example animation using anime.js
    anime({
      targets: ".cv-button",
      translateY: -10,
      duration: 500,
      direction: "alternate",
      easing: "easeInOutQuad",
    });
  };

  return (
    <a href={cvPDF} download="cv.pdf" style={{ textDecoration: "none" }}>
      <Button colorScheme="blue" onClick={handleClick} className="cv-button">
        <FaDownload /> Download CV
      </Button>
    </a>
  );
};

export default DownloadCV;
