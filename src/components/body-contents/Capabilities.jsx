import React, { useEffect, useState } from "react";
import Certificates from "../assets/Certificates";
import Skills from "../assets/Skills";
import { Divider, Heading, Center, Box, Flex } from "@chakra-ui/react";

function Capabilities({ header }) {
    const [isHidden, setIsHidden] = useState(false);
    const [isLeft, setIsLeft] = useState(false);
    const [isRight, setIsRight] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Check media query conditions
            if (window.matchMedia("(max-width: 300px)").matches) {
                // Mobile-specific scroll behavior
                setIsHidden(scrollPosition > 2500);
                setIsLeft(scrollPosition > 2500);
                setIsRight(scrollPosition > 2500);
            } else if (window.matchMedia("(max-width: 700px)").matches) {
                // Tablet-specific scroll behavior
                setIsHidden(scrollPosition > 2500);
                setIsLeft(scrollPosition > 2500);
                setIsRight(scrollPosition > 2500);
            } else {
                // Default scroll behavior for larger screens
                setIsHidden(scrollPosition > 1100);
                setIsLeft(scrollPosition > 1400);
                setIsRight(scrollPosition > 1400);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const containerStyle = {
        transition: "opacity 0.3s ease-out",
        opacity: isHidden ? 0 : 1,
    };

    return (
        <div className="capabilities-container">
            <Center style={containerStyle}>
                <Heading color="white" fontSize="30px" marginTop="30px">
                    {header}
                    <Divider marginTop="10px" />
                </Heading>
            </Center>
            <Flex className="certificate-skill-container">
                <Box
                    className="certificates-container"
                    maxW="100%"
                    overflowY="auto"
                    overflowX={"hidden"}
                    css={{
                        transform: isLeft ? "translateX(-100%)" : "translateX(0)",
                        opacity: isLeft ? 0 : 1,
                        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
                    }}
                >
                    <Certificates header={"Certificates"} />
                </Box>
                <Box
                    className="skills-container"
                    position="relative"
                    overflow="hidden"
                    css={{
                        transform: isRight ? "translateX(100%)" : "translateX(0)",
                        opacity: isRight ? 0 : 1,
                        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
                    }}
                >
                    <Skills header={"Skills"} />
                </Box>
            </Flex>
        </div>
    );
}

export default Capabilities;
