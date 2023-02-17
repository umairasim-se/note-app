import React, { useContext, useState, useEffect, useCallback } from "react";

import Grid from "@mui/material/Grid";
import { NotesContext } from "../context/NotesContextProvider";
import NoteModal from "./NoteModal";
import EditNote from "./EditNote";
import Note from "./Note";

const Cards = () => {
  const { notes, priority } = useContext(NotesContext);

  const [allNotes, setAllNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    if (priority !== "All") {
      const priorityNotes = notes.filter((note) => note.priority === priority);
      setAllNotes([...priorityNotes]);
    } else {
      setAllNotes([...notes]);
    }
  }, [notes, priority]);

  const handleModal = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  const handleEditModal = useCallback(() => {
    setOpenEditModal((state) => !state);
  }, []);

  const setNote = useCallback((note) => {
    setCurrentNote(note);
  });

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
          return (
            <Note
              key={note?.id}
              note={note}
              handleModal={handleModal}
              setCurrentNote={setNote}
              openEditModal={handleEditModal}
            />
          );
        })}
      </Grid>
      <NoteModal
        currentNote={currentNote}
        open={open}
        handleClose={handleModal}
      />
      <EditNote
        currentNote={currentNote}
        open={openEditModal}
        handleClose={handleEditModal}
      />
    </>
  );
};

export default Cards;
