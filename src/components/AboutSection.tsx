import React from "react";
import { Box, Typography, Container } from "@mui/material";

const AboutSection: React.FC = () => {
  return (
    <Box py={8} bgcolor="#f9f9f9">
      <Container>
        <Typography variant="h4" gutterBottom>
          About Zaph Tours
        </Typography>
        <Typography variant="body1">
          Zaph Tours is a premier travel company based in Kenya, offering
          unforgettable safaris and adventure experiences. With years of
          experience and a passion for travel, our mission is to connect you
          with the wild beauty of East Africa, while ensuring your journey is
          safe, enjoyable, and memorable.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutSection;
