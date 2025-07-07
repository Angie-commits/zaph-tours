import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import type { Destination } from "../data/featuredDestinations";

interface Props {
  destination: Destination;
}

const DestinationCard: React.FC<Props> = ({ destination }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={destination.image}
        alt={destination.name}
      />
      <CardContent>
        <Typography variant="h6">{destination.name}</Typography>
        <Typography variant="body2" gutterBottom>
          {destination.description}
        </Typography>
        <Typography variant="subtitle2" mb={1}>
          Individual Price: {destination.price}
        </Typography>
        <Button variant="outlined" size="small" href="#">
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
