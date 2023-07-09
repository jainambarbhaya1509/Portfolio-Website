import React, { useEffect } from "react";
import { Flex, Box } from "@chakra-ui/react";

function Loader() {

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const atom = document.querySelector(".atom");

      // Calculate the translateY value based on the scroll position
      const translateY = -scrollPosition / 5;

      // Apply the translateY value to the atom element
      atom.style.transform = `translateY(${translateY}px)`;
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <div>
            <Flex justifyContent="center" alignItems="center" minHeight="100vh">
                <Box>
                    <div className="atom">
                        <div className="electron"></div>
                        <div className="electron"></div>
                        <div className="electron"></div>
                    </div>
                </Box>
                <style jsx="true">{`
                        @keyframes atom {
                            from { transform: none; }
                            to { transform: translateY(-10px); }
                          }
                          @keyframes electron-circle1 {
                            from { transform: rotateY(70deg) rotateZ(20deg); }
                            to { transform: rotateY(70deg) rotateZ(380deg); }
                          }
                          @keyframes electron1 {
                            from { transform: rotateZ(-20deg) rotateY(-70deg); }
                            to { transform: rotateZ(-380deg) rotateY(-70deg); }
                          }
                          @keyframes electron-circle2 {
                            from { transform: rotateY(60deg) rotateX(60deg) rotateZ(-30deg); }
                            to { transform: rotateY(60deg) rotateX(60deg) rotateZ(330deg); }
                          }
                          @keyframes electron2 {
                            from { transform: rotateZ(30deg) rotateX(-60deg) rotateY(-60deg); }
                            to { transform: rotateZ(-330deg) rotateX(-60deg) rotateY(-60deg); }
                          }
                          @keyframes electron-circle3 {
                            from { transform: rotateY(-60deg) rotateX(60deg) rotateZ(100deg); }
                            to { transform: rotateY(-60deg) rotateX(60deg) rotateZ(460deg); }
                          }
                          @keyframes electron3 {
                            from { transform: rotateZ(-100deg) rotateX(-60deg) rotateY(60deg); }
                            to { transform: rotateZ(-460deg) rotateX(-60deg) rotateY(60deg); }
                          }
                          
                          
                          .atom {
                            margin: 50px auto;
                            width: 120px;
                            height: 120px;
                            position: relative;
                            animation: atom 1s ease-in-out infinite alternate;
                            perspective: 300px;
                            transform-style: preserve-3d;
                          }
                          .atom:before {
                              content: '';
                              position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            margin: auto;
                            width: 20px;
                            height: 20px;
                            border-radius: 10px;
                            background: #555;
                          }
                          .atom .electron {
                            position: absolute;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            margin: auto;
                            width: 100px;
                            height: 100px;
                            border-radius: 50px;
                            border: 2px solid #666;
                            transform-style: preserve-3d;
                          }
                          .atom .electron:before {
                              content: '';
                            position: absolute;
                            top: -4px;
                            left: 0;
                            right: 0;
                            margin: auto;
                            width: 8px;
                            height: 8px;
                            border-radius: 4px;
                            background: #666;
                            transform-origin: 50% 50% 0;
                          }
                          .atom .electron:nth-child(1) {
                            transform: rotateY(70deg) rotateZ(20deg);
                            animation: electron-circle1 3s linear infinite;
                          }
                          .atom .electron:nth-child(2) {
                            transform: rotateY(60deg) rotateX(60deg) rotateZ(-30deg);
                            animation: electron-circle2 3s linear infinite;
                          }
                          .atom .electron:nth-child(3) {
                            transform: rotateY(-60deg) rotateX(60deg) rotateZ(100deg);
                            animation: electron-circle3 3s linear infinite;
                          }
                          .atom .electron:nth-child(1):before {
                            transform: rotateZ(-20deg) rotateY(-70deg);
                            animation: electron1 3s linear infinite;
                          }
                          .atom .electron:nth-child(2):before {
                            transform: rotateZ(30deg) rotateX(-60deg) rotateY(-60deg);
                            animation: electron2 3s linear infinite;
                          }
                          .atom .electron:nth-child(3):before {
                            transform: rotateZ(-100deg) rotateX(-60deg) rotateY(60deg);
                            animation: electron3 3s linear infinite;
                          }
                        `
                    }
                </style>
            </Flex>
        </div>

    );
}

export default Loader