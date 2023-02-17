import React, { useContext, useState, useEffect, useCallback } from "react";

import Grid from "@mui/material/Grid";
import { NotesContext } from "../context/NotesContextProvider";
import NoteModal from "./NoteModal";
import EditNote from "./EditNote";
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
    </>
  );
};

export default Cards;
