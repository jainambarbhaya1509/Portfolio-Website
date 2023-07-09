import React, { useEffect, useRef } from "react";
import { Box, Text, Stack, Heading, Divider } from "@chakra-ui/react";
import anime from "animejs";

function Skills({ header }) {
  const skills = `
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
    ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
    ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
    ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
    ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
    ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
    ![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
    ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
    ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
    ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
    ![Eclipse](https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white)
    ![Atom](https://img.shields.io/badge/Atom-%2366595C.svg?style=for-the-badge&logo=atom&logoColor=white)
    ![Sublime Text](https://img.shields.io/badge/sublime_text-%23575757.svg?style=for-the-badge&logo=sublime-text&logoColor=important)
    ![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white)
    ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
    ![LaTeX](https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white)
    ![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)
    ![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)
    ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
    ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
    ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
    ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
    ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white)
    ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
    ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
    ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
  `;

  const badgeStyles = {
    display: "inline-block",
    marginRight: "3px",
    marginLeft: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    transition: "transform 0.3s",
  };

  const badgesRef = useRef(null);

  useEffect(() => {
    anime({
      targets: badgesRef.current.querySelectorAll(".el"),
      translateX: ['-100%', '10%'], // Slide in from the left
      opacity: [0, 1], // Fade in
      delay: anime.stagger(100, { start: 500 }), // Delay starts at 500ms then increases by 100ms for each element
      easing: 'easeOutExpo', // Use easing for a smooth effect
    });
  }, []);

  const badges = skills
    .trim()
    .split("\n")
    .map((badge, index) => (
      <img
        key={index}
        src={badge.match(/!\[.*\]\((.*)\)/)?.[1]}
        alt="Badge"
        style={badgeStyles}
        className="el"
      />
    ));

  return (
    <div className="skills">
      <Stack spacing="4" align="center">
        <Heading color="white" fontSize="30px" marginTop="30px">
          {header}
          <Divider marginTop="10px" />
        </Heading>
        <Box>
          <Text
            color="white"
            fontSize="19px"
            paddingRight="15px"
            paddingLeft="15px"
            paddingTop="15px"
            textAlign="center"
            wordBreak="break-word"
            lineHeight="2"
            ref={badgesRef}
          >
            {badges}
          </Text>
        </Box>
      </Stack>
      <style>
        {`
          @keyframes scaleUp {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.2);
            }
          }

          .skills img:hover {
            animation: scaleUp 0.1s ease-in;
          }
        `}
      </style>
    </div>
  );
}

export default Skills;
