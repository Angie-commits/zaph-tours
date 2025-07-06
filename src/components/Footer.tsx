import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 4, mt: 8 }}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} Zaph Tours. With love, Angie.
      </Typography>
      <Box sx={{ textAlign: "center", mt: 1 }}>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Facebook
        </Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Instagram
        </Link>
        <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Twitter
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
