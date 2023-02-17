import React, { useContext, useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { NotesContext } from "../context/NotesContextProvider";
import NoteModal from "./NoteModal";

const Cards = () => {
  const { notes, priority } = useContext(NotesContext);
  const [allNotes, setAllNotes] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (priority !== "All") {
      const priorityNotes = notes.filter((note) => note.priority === priority);
      setAllNotes([...priorityNotes]);
    } else {
      setAllNotes([...notes]);
    }
  }, [notes, priority]);

  const handleModal = () => {
    setOpen((state) => !state);
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{
          m: "1rem 0",
          flexWrap: "wrap",
          // gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
        flexDirection="row"
        // gap={1}
        // spacing={1}
      >
        {allNotes?.map((note) => {
          let bgColor = "";

          switch (note?.priority.toLowerCase()) {
            case "low":
              bgColor = "green";
              break;
            case "medium":
              bgColor = "yellow";
              break;
            case "high":
              bgColor = "red";
              break;
            default:
              break;
          }

          return (
            <Grid item key={note?.id} xs={12} sm={6} md={3} sx={{ p: 1 }}>
              <Card
                onClick={() => handleModal()}
                sx={{
                  height: "175px",
                  borderRadius: "1rem",
                  cursor: "pointer",
                }}
              >
                <CardContent>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {note?.title}
                    </Typography>

                    <Box
                      component="div"
                      sx={{
                        background: bgColor,
                        borderRadius: "50%",
                        width: "10px",
                        height: "10px",
                      }}
                    />
                  </Stack>
                  <Typography variant="h5" component="div">
                    {note?.description}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {note?.note}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <NoteModal open={open} handleClose={handleModal} />
    </>
  );
};

export default Cards;
