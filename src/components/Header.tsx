import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Zaph Tours
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/destinations">
            Destinations
          </Button>
          <Button color="inherit" component={Link} to="/tripTypes">
            Trip Types
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
