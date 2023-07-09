import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Divider, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import anime from "animejs";

function Certificate({ name, image }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <Box m="2" textAlign="center">
            <Button
                className="certificate-name"
                onClick={handleOpenModal}
                width="400px"
                wordBreak="break-word"
                backgroundColor="#00599c"
                overflowX="hidden"
                color="white"
                variant="unstyled"
                transition="background-color 0.3s"
                _hover={{ backgroundColor: "#0469ad" }}
            >
                {name}
            </Button>

            <Modal isOpen={isOpen} onClose={handleCloseModal} motionPreset="slideInBottom">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={image} alt={name} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
}

function Certificates() {
    const certificatesRef = useRef(null);
    const [isLeft, setIsLeft] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsLeft(scrollPosition > 900);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isLeft) {
            const targets = Array.from(certificatesRef.current.getElementsByClassName("certificate-name"));
            anime({
                targets,
                translateX: [-500, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
            });
        }
    }, [isLeft]);

    return (
        <div className="certificates" style={{ height: "fit-content" }}>
            <Stack spacing="4" align="center">
                <Heading color="white" fontSize="30px" marginTop="30px">
                    Certificates
                    <Divider marginTop="10px" />
                </Heading>
                <Box
                    ref={certificatesRef}
                    display="flex"
                    justifyContent="center"
                    mt="2px"
                    flexWrap="wrap"
                    wordBreak="break-word"
                >
                    <Certificate
                        name="Mastering Data Structures & Algorithm using C and C++"
                        image={require("../../Images/Certificates/data_structures.jpg")}
                    />
                    <Certificate
                        name="Infosys Springbord: Basics of Python"
                        image={require("../../Images/Certificates/basics_of_python.jpg")}
                    />
                    <Certificate
                        name="Flutter Workshop"
                        image={require("../../Images/Certificates/flutter_workshop.jpg")}
                    />
                    <Certificate
                        name="Polyhacks Hackathon"
                        image={require("../../Images/Certificates/polyhacks.jpg")}
                    />
                    <Certificate
                        name="Tanta Utsav: Debate Competition"
                        image={require("../../Images/Certificates/tantra_utsav.jpg")}
                    />
                    <Certificate
                        name="Hindi Divas: Debate Competition"
                        image={require("../../Images/Certificates/hindi_divas.jpg")}
                    />
                    <Certificate
                        name="Ignite IT: Event Management"
                        image={require("../../Images/Certificates/ignite_it.jpg")}
                    />
                </Box>
            </Stack>
        </div>
    );
}

export default Certificates;
