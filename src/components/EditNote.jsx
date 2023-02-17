import React, { useContext } from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import * as Yup from "yup";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

import RHFTextfield from "./hook-form/RHFTextfield";
import RHFSelect from "./hook-form/RHFSelect";

import CloseIcon from "@mui/icons-material/Close";

import { NotesContext } from "../context/NotesContextProvider";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "2rem",
  color: "#000",
  fontFamily: "inherit",
};

const EditNote = ({ open, handleClose, currentNote }) => {
  const { editNote } = useContext(NotesContext);

  const NoteSchema = Yup.object().shape({
    title: Yup.string(),
    description: Yup.string(),
    note: Yup.string(),
    priority: Yup.string(),
  });

  const { title, description, note, priority, id } = currentNote;

  const defaultValues = {
    title,
    description,
    note,
    priority,
  };

  const methods = useForm({
    resolver: yupResolver(NoteSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = (data) => {
    const timestamp = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });

    const { title, description, note, priority } = data;

    const formData = {
      id,
      title,
      description,
      note,
      priority,
      timestamp,
    };

    editNote(id, { ...formData });
    handleClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => handleClose()}
      closeAfterTransition
    >
      <Fade in={open}>
        <Box sx={style}>
          <Stack direction="column">
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Edit Note
              </Typography>

              <Box>
                <CloseIcon
                  fontSize="medium"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleClose()}
                />
              </Box>
            </Stack>
          </Stack>

          <Stack direction="column">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction={"column"} spacing={1} sx={{ mt: 2 }}>
                  <InputLabel id="title-id"> Title </InputLabel>
                  <RHFTextfield
                    id="title-id"
                    name="title"
                    placeholder="Title"
                    size="small"
                  />
                </Stack>
                <Stack direction={"column"} spacing={1} sx={{ mt: 2 }}>
                  <InputLabel id="description-id"> Description </InputLabel>
                  <RHFTextfield
                    id="description-id"
                    name="description"
                    placeholder="Description"
                    size="small"
                  />
                </Stack>
                <Stack direction={"column"} spacing={1} sx={{ mt: 2 }}>
                  <InputLabel id="note-id"> Note </InputLabel>
                  <RHFTextfield
                    id="note-id"
                    name="note"
                    placeholder="Note"
                    size="small"
                  />
                </Stack>

                <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
                  <InputLabel id="select-id"> Priority </InputLabel>
                  <RHFSelect id="select-id" name="priority" size="small">
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </RHFSelect>
                </Stack>

                <Stack
                  justifyContent={"flex-end"}
                  sx={{ mt: 2, width: "100px" }}
                >
                  <Button
                    type="submit"
                    disableRipple
                    sx={{
                      color: "#fff",
                      background: "#2B6CB0",
                      "&:hover": {
                        background: "#4e96e1",
                      },
                      "&:focus": {
                        outline: "none",
                      },
                      "&:active": {
                        background: "#4e96e1",
                      },
                    }}
                  >
                    Save
                  </Button>
                </Stack>
              </form>
            </FormProvider>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default React.memo(EditNote);
