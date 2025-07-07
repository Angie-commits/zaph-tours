import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import TripTypeCard from "../components/TripTypeCard";
import TripTypes from "../data/TripTypes";

const TripTypePage: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Explore Our Trip Types
      </Typography>
      <Grid container spacing={4}>
        {TripTypes.map((trip, index) => (
          <Grid size={{xs: 12, sm:6, md:4}} key={index}>
            <TripTypeCard Trip={trip} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TripTypePage;
