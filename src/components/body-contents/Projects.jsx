import React, { useState, useEffect, useRef } from "react";
import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import anime from "animejs/lib/anime.es.js";

function RepoCard({ repo }) {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get(repo.languages_url);
        setLanguages(Object.keys(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchLanguages();
  }, [repo.languages_url]);

  const renderRepoCard = () => (
    <Box
      color={"white"}
      border={"2px solid white"}
      borderRadius="10px"
      boxShadow="md"
      p="20px"
      width="300px"
      height="200px"
      textAlign="center"
      marginBottom="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      className="repo-card" // Add class name for animation targeting
    >
      <Text fontSize="lg" fontWeight="bold" mb="2">
        {repo.name}
      </Text>
      <Text fontSize="sm" color="white" textAlign="center" mb="4">
        {repo.description}
      </Text>
      <Text textAlign="center">
        Stars: {repo.stargazers_count} | Forks: {repo.forks_count}
      </Text>
      <Text fontSize="sm" color="white" textAlign="center" mt="2">
        Languages: {languages.join(", ")}
      </Text>
    </Box>
  );

  if (!repo.private) {
    return (
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        {renderRepoCard()}
      </a>
    );
  } else {
    return null; // Don't render private repositories
  }
}

function Projects({ header }) {
  const [repos, setRepos] = useState([]);
  const repoRef = useRef(null);
  const [isRight, setIsRight] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repositoryNames = [
          "Python-Student-RMS",
          "Travel-Agency-Management",
          "Banking-Website-Design",
          "Student-BioData-Record-Management-System"
        ];
        const fetchRepoPromises = repositoryNames.map((repoName) =>
          axios.get(`https://api.github.com/repos/jainambarbhaya1509/${repoName}`)
        );
        const responses = await Promise.all(fetchRepoPromises);
        const fetchedRepos = responses.map((response) => response.data);
        setRepos(fetchedRepos.filter((repo) => !repo.private));
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    const targets = repoRef.current.querySelectorAll(".repo-card");
    anime({
      targets,
      translateX: [-500, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
    });
  }, [repos]);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check media query conditions
      if (window.matchMedia("(max-width: 300px)").matches) {
        // Mobile-specific scroll behavior

        setIsRight(scrollPosition > 2900);
      } else if (window.matchMedia("(max-width: 700px)").matches) {
        // Tablet-specific scroll behavior

        setIsRight(scrollPosition > 3700);
      } else {
        // Default scroll behavior for larger screens

        setIsRight(scrollPosition > 2000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="projects-container">
      <Stack spacing="4" align="center" width={'100%'}>
        <Heading color="white" fontSize="30px" marginTop="30px">
          {header}
          <Divider marginTop="10px" />
        </Heading>
      </Stack>
      <Box borderRadius="10px" p="20px" display="flex" className="repos" ref={repoRef}
        css={{
          transform: isRight ? "translateX(100%)" : "translateX(0)",
          opacity: isRight ? 0 : 1,
          transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
        }}
      >
        {repos.map((repo) => (
          <div
            key={repo.id}
            style={{
              textDecoration: "none",
              pointerEvents: repo.private ? "none" : "auto"
            }}
          >
            <RepoCard repo={repo} />
          </div>
        ))}
      </Box>
    </div>
  );
}

export default Projects;
