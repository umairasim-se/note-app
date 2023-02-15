import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { NotesContext } from "../context/NotesContextProvider";

const Cards = () => {
  const { notes } = useContext(NotesContext);

  console.log(notes);

  return (
    <Stack
      direction={"row"}
      alignItems="center"
      justifyContent="start"
      sx={{ m: "1rem 0", flexWrap: "wrap" }}
    >
      {notes?.map((note) => (
        <Card
          key={note?.id}
          sx={{ width: 275, height: 175, borderRadius: "1rem" }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {note?.title}
            </Typography>
            <Typography variant="h5" component="div">
              {note?.description}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {note?.note}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
};

export default Cards;
