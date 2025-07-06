// src/pages/TripTypesPage.tsx

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import tripTypesData from "../data/TripTypes";
import TripTypeCard from "../components/TripTypeCard";

const TripTypesPage: React.FC = () => {
  return (
    <Box py={8} bgcolor="#f5f5f5">
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Explore Our Trip Types
        </Typography>

        <Grid container spacing={4}>
          {tripTypesData.map((trip, index) => (
            <Grid item xs={12} key={index}>
              <TripTypeCard Trip={trip} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TripTypesPage;


