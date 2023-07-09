import React, { useState } from "react";
import { Image, Text, Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

import Socials from "../assets/Socials";

function Profile() {
    const profileImage = require("../../Images/profile-image.jpeg");
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = () => {
        setIsZoomed(true);
    };

    const handleCloseModal = () => {
        setIsZoomed(false);
    };

    return (
        <div className="profile">
                <Image src={profileImage} alt="Profile Image" className="profile-image" onClick={handleImageClick} />
                <Modal isOpen={isZoomed} onClose={handleCloseModal} size="sm">
                    <ModalOverlay />
                    <ModalContent>
                        <ModalBody>
                            <Image src={profileImage} alt="Profile Image" width={'100%'} height={'100%'} objectFit="contain" />
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Text className="profile-text-name" wordBreak="break-word">Hi, I'm  <span className="name">Jainam Barbhaya</span></Text>
                <Text className="profile-text-profession" wordBreak="break-word">I'm Into <span className="profession">Full Stack Web Development</span></Text>
                <Socials />

            <style jsx="true">{`
                        .profile-text-name {
                        text-shadow: 4px 2px 10px rgba(0, 0, 0, 0.3);
                        }

                        .profile-text-profession {
                          text-shadow: 4px 2px 10px rgba(0, 0, 0, 0.3);
                        }
            `}</style>
        </div>
    );
}

export default Profile;
