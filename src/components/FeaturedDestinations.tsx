import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import featuredDestinations from "../data/featuredDestinations";

const FeaturedDestinations: React.FC = () => {
  return (
    <Box py={8}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Featured Destinations
        </Typography>
        <Grid container spacing={4}>
          {featuredDestinations.map((dest, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={dest.image}
                  alt={dest.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {dest.name}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {dest.description}
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    {dest.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedDestinations;
