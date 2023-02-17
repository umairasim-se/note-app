import React, { useCallback, useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import { NotesContext } from "../context/NotesContextProvider";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditNote from "./EditNote";
import NoteModal from "./NoteModal";

const Note = ({ note }) => {
  const [edit, setEdit] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [open, setOpen] = useState(false);

  const { removeNote } = useContext(NotesContext);

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

  const handleEditModal = useCallback(() => {
    setOpenEditModal((state) => !state);
  }, []);

  console.log(openEditModal);

  const handleModal = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  return (
    <>
      <Grid item key={note?.id} xs={12} sm={6} md={3} sx={{ p: 1 }}>
        <Card
          onClick={() => {
            handleModal();
            // setCurrentNote(note);
          }}
          sx={{
            height: "160px",
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
          <Stack
            direction="row"
            justifyContent={"flex-end"}
            p="0 1rem"
            onClick={(e) => {
              e.stopPropagation();
              setEdit((state) => !state);
            }}
          >
            <MoreHorizIcon />
          </Stack>
        </Card>
        <Stack direction="row" justifyContent={"space-evenly"}>
          <code>{note?.timeStamp}</code>

          <Stack
            direction="row"
            justifyContent={"space-between"}
            width={"90px"}
            sx={{
              fontSize: "14px",
              color: "yellow",
              visibility: edit ? "visible" : "hidden",
              transition: "all .2s",
              opacity: !edit ? "0" : "1",
            }}
          >
            <code
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleEditModal();
                // setCurrentNote(note);
              }}
            >
              Edit
            </code>
            <code
              style={{ cursor: "pointer" }}
              onClick={() => removeNote(note?.id)}
            >
              Delete
            </code>
          </Stack>
        </Stack>
      </Grid>
      <EditNote
        currentNote={note}
        open={openEditModal}
        handleClose={handleEditModal}
      />
      <NoteModal currentNote={note} open={open} handleClose={handleModal} />
    </>
  );
};

export default React.memo(Note);
