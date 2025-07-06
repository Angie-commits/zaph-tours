import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import testimonials from "../data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <Box py={8} bgcolor="#f1f1f1">
      <Container>
        <Typography variant="h4" gutterBottom>
          What Our Travelers Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((t, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="body1" gutterBottom>
                  “{t.quote}”
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  — {t.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
