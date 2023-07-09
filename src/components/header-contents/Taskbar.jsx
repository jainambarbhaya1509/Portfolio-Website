import React from 'react';
import { Box, Flex, Text, Image, Link } from '@chakra-ui/react';

function Taskbar() {
    return (
        <div className='set-taskbar'>
            <Flex p={2} alignItems="center" className="taskbar">
                <Box flex="1" paddingLeft="50px">
                    <Flex alignItems="center">
                        <Link target='_self' href='#' className='portfolio-icon'>
                            <Image src="/Images/favicon.ico" alt="Logo" boxSize={6} mr={3} />
                        </Link>
                        <Link target='_self' href='#' className='portfolio-text'>
                            <Text fontSize="lg" color="white">My Portfolio</Text>
                        </Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex color={"white"}>
                        <Link mr={4} href='#about-me' className="navigation-link">About Me</Link>
                        <Link mr={4} href='#capabilities' className="navigation-link">Capabilities</Link>
                        <Link mr={4} href='#projects' className="navigation-link">Projects</Link>
                        <Link mr={4} href='#experience' className="navigation-link">Experience</Link>
                     </Flex>
                </Box>
                <style jsx="true">{`
                .taskbar .navigation-link {
                    position: relative;
                    color: white;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                
                .taskbar .navigation-link:before {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: white;
                    transform: scaleX(0);
                    transition: transform 0.3s;
                }
                
                .taskbar .navigation-link:hover {
                    color: #ffcc00;
                }
                
                .taskbar .navigation-link:hover:before {
                    transform: scaleX(1);
                }
                
                /* Remove default underline */
                .taskbar .navigation-link:focus,
                .taskbar .navigation-link:hover,
                .taskbar .navigation-link:active {
                    text-decoration: none;
                    outline: none;
                }
            `}</style>
            </Flex>
        </div>
    );
}

export default Taskbar;
