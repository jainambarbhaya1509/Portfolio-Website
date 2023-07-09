import React from "react";
import { Box } from "@chakra-ui/react";

import AboutMe from "./body-contents/AboutMe";
import Capabilities from "./body-contents/Capabilities";
import Projects from "./body-contents/Projects";
import Experience from "./body-contents/Experience";

function Body() {
    return (
        <div>
            <Box id="about-me">
                <AboutMe
                    header={'About Me'}
                    content={"I am a Full Stack Web Developer with a strong passion for creating dynamic, responsive, and user-friendly websites. With a love for open source, I actively contribute to the development community and believe in the power of collaboration and sharing knowledge. My expertise extends to various technologies and frameworks, allowing me to excel in projects ranging from event management to debate winner. I am committed to continuously expanding my skills, staying updated with the latest industry trends, and delivering high-quality solutions. As a dedicated professional, I strive to contribute to the ever-evolving world of web development, creating innovative and impactful digital experiences."}
                />
            </Box>

            <Box id="capabilities">
                <Capabilities 
                header={"My Competence"}
                />
            </Box>

            <Box id="projects">
                <Projects header={"Explore Projects"} />
            </Box>

            <Box id="experience">
                <Experience header={"My Experience"} />
            </Box>
        </div>
    );
}

export default Body;