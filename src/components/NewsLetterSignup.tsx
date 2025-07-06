import React from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

const NewsletterSignup: React.FC = () => {
  return (
    <Box py={8} bgcolor="primary.light" color="black">
      <Container>
        <Typography variant="h5" gutterBottom>
          Stay Updated on Safaris and Adventures!
        </Typography>
        <Typography variant="body1" mb={3}>
          Subscribe to our newsletter for weekly updates and travel tips.
        </Typography>
        <Box component="form" display="flex" gap={2} flexWrap="wrap">
          <TextField
            label="Email Address"
            variant="outlined"
            size="small"
            type="email"
            required
            sx={{ flexGrow: 1, minWidth: 240 }}
          />
          <Button variant="contained" color="secondary" type="submit">
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsletterSignup;
