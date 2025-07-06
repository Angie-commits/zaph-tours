import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
       backgroundImage: 'url("/images/pagge.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Best Safaris and Adventures
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Explore the world with us
      </Typography>
      <Button variant="contained" color="secondary">
        Discover More
      </Button>
    </Box>
  );
};

export default HeroSection;
