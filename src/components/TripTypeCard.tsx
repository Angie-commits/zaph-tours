import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";
import type { TripType } from "../data/TripTypes";

interface Props {
  Trip: TripType;
}

const TripTypeCard: React.FC<Props> = ({ Trip }) => {
  return (
    <Card sx={{ mb: 4 }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <CardMedia
          component="img"
          height="200"
          image={Trip.images}
          alt={Trip.title}
          sx={{ width: { xs: "100%", md: 300 }, objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h6">{Trip.title}</Typography>
          <Typography variant="body2" sx={{ mt: 1, mb: 1 }}>
            {Trip.description}
          </Typography>
          <Typography variant="subtitle2" color="primary">
            {Trip.price}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default TripTypeCard;