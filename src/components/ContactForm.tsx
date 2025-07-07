import React from "react";
import { Box, TextField, Button, Grid } from "@mui/material";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mt={2}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField fullWidth label="Name" required />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField fullWidth label="Email" type="email" required />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField fullWidth label="Subject" required />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField fullWidth label="Message" multiline rows={4} required />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Button variant="contained" type="submit">
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
