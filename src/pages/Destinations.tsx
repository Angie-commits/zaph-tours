import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import destinations from "../data/featuredDestinations";
import DestinationCard from "../components/DestinationCard";

const Destinations: React.FC = () => {
  return (
    <Box py={8}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Explore Our Destinations
        </Typography>
        <Grid container spacing={4}>
          {destinations.map((dest, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <DestinationCard destination={dest} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Destinations;
