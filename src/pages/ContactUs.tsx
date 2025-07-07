import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import ContactForm from "../components/ContactForm";
import {
  Email,
  Phone,
  LocationOn,
  Twitter,
  Instagram,
} from "@mui/icons-material";

const ContactUs: React.FC = () => {
  return (
    <Box py={8}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{xs: 12, sm:6, md:4}}>
            <Typography variant="h6">Send us a message</Typography>
            <ContactForm />
          </Grid>

          <Grid size={{xs: 12, sm:6, md:4}}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <List>
              <ListItem>
                <Email sx={{ mr: 1 }} />
                <ListItemText primary="info@zaphtours.com" />
              </ListItem>
              <ListItem>
                <Phone sx={{ mr: 1 }} />
                <ListItemText primary="0746098500" />
              </ListItem>
              <ListItem>
                <LocationOn sx={{ mr: 1 }} />
                <ListItemText primary="Nairobi, Kenya" />
              </ListItem>
            </List>

            <Typography variant="h6" gutterBottom mt={3}>
              Office Hours
            </Typography>
            <Typography variant="body2">
              Monday - Friday: 9:00 AM – 6:00 PM
              <br />
              Saturday: 10:00 AM – 4:00 PM
              <br />
              Sunday: Closed
            </Typography>

            <Box mt={3}>
              <Typography variant="h6">Follow Us</Typography>
              <Box>
                <IconButton href="#" aria-label="Twitter">
                  <Twitter />
                </IconButton>
                <IconButton href="#" aria-label="Instagram">
                  <Instagram />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid size={{xs: 12, sm:6, md:4}}>
            <Typography variant="h6" gutterBottom>
              Our Location
            </Typography>
            <Box
              sx={{
                height: "300px",
                width: "100%",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <iframe
                title="Zaph Tours Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.221802764978!2d36.816667!3d-1.283333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d53041b8db%3A0x76c67d72f5b6f0c7!2sNairobi!5e0!3m2!1sen!2ske!4v1689160098726"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
