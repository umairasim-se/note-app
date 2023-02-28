import { useContext, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { NotesContext } from "../context/NotesContextProvider";
import Note from "./Note";

const Cards = () => {
  const { notes, priority } = useContext(NotesContext);

  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    if (priority !== "All") {
      const priorityNotes = notes.filter((note) => note.priority === priority);
      setAllNotes([...priorityNotes]);
    } else {
      setAllNotes([...notes]);
    }
  }, [notes, priority]);

  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{
          m: "1rem 0",
          flexWrap: "wrap",
        }}
        flexDirection="row"
      >
        {allNotes?.map((note) => {
          return <Note key={note?.id} note={note} />;
        })}
      </Grid>
      {allNotes.length === 0 && (
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography
            variant="h3"
            sx={{ color: "#fff", fontFamily: "inherit" }}
          >
            {" "}
            No Notes yet{" "}
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default Cards;
