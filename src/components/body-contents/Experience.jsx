import React, { useEffect, useState } from "react";
import { Box, Image, Heading, Text, Button, Divider, Stack } from "@chakra-ui/react";


function Experience({ header }) {

    const [isHidden, setIsHidden] = useState(false);

    const maiara = {
        image: require("../../Images/Experience/maiara.jpg"),
        name: "MAIARA Technologies Private Limited",
        profession: "Full Stack Developer Intern",
        duration: "June 2023 - Present",
        website: "https://microtek.ai",
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (window.matchMedia("(max-width: 300px)").matches) {
                // Mobile-specific scroll behavior
                setIsHidden(currentScrollY > 4500);
            } else if (window.matchMedia("(max-width: 700px)").matches) {
                // Tablet-specific scroll behavior

                setIsHidden(currentScrollY > 4500);
            } else {
                // Default scroll behavior for larger screens

                setIsHidden(currentScrollY > 2900);
            }
        }

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
        <div className="experience-container">
            <Stack spacing="4" align="center" width={"100%"} style={containerStyle}>
                <Heading color="white" fontSize="30px" marginTop="30px">
                    {header}
                    <Divider marginTop="10px" />
                </Heading>
                <Box display={'flex'} gap={"20px"} className="companyinfo-box-container">
                    <CompanyInfo
                        image={maiara.image}
                        name={maiara.name}
                        profession={maiara.profession}
                        duration={maiara.duration}
                        website={maiara.website}
                    />
                </Box>
            </Stack>
        </div>
    );
}


const CompanyInfo = ({ image, name, profession, duration, website }) => {
    return (
        <div className="company-info">
            <Box textAlign="center" className="company-box" >
                <Image src={image} alt={name} maxH="200px" mx="auto" mb={4} />

                <Heading as="h2" size="lg" fontWeight="bold" mb={2}>
                    {name}
                </Heading>

                <Text mt={3}>{profession}</Text>

                <Text mb={4}>{duration}</Text>

                <Button colorScheme="blue" onClick={() => window.open(website, "_blank")}>
                    Visit Website
                </Button>
            </Box>
        </div>
    );
};

export default Experience;
