import React from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import * as Yup from "yup";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

import RHFTextfield from "./hook-form/RHFTextfield";

import CloseIcon from "@mui/icons-material/Close";

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

const defaultValues = {
  title: "",
  description: "",
  note: "",
};

const AddNote = ({ open, handleClose }) => {
  const NotesSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    note: Yup.string().required("Note is required"),
    priority: Yup.string(),
  });

  const methods = useForm({
    resolver: yupResolver(NotesSchema),
    defaultValues,
  });

  const { reset, handleSubmit } = methods;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
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
                New Note
              </Typography>

              <Box>
                <CloseIcon
                  fontSize="medium"
                  sx={{ cursor: "pointer" }}
                  onClick={handleClose}
                />
              </Box>
            </Stack>
          </Stack>

          <Stack direction="column">
            <FormProvider
              {...methods}
              onSubmit={handleSubmit((e) => {
                e.preventDefault();
              })}
            >
              <Stack direction={"column"} spacing={1} sx={{ mt: 2 }}>
                <InputLabel id="title-id"> Title </InputLabel>
                <RHFTextfield
                  id="title-id"
                  name="title"
                  placeholder="Title"
                  fullWidth
                  size="small"
                />
              </Stack>
              <Stack direction={"column"} spacing={1} sx={{ mt: 2 }}>
                <InputLabel id="description-id"> Description </InputLabel>
                <RHFTextfield
                  id="description-id"
                  name="description"
                  placeholder="Description"
                  fullWidth
                  size="small"
                />
              </Stack>
              <Stack direction={"column"} spacing={1} sx={{ mt: 2 }}>
                <InputLabel id="note-id"> Note </InputLabel>
                <RHFTextfield
                  id="note-id"
                  name="note"
                  placeholder="Note"
                  fullWidth
                  size="small"
                />
              </Stack>

              <Stack direction="column" spacing={1} sx={{ mt: 2 }}>
                <InputLabel id="note-id"> Priority </InputLabel>
                <Select defaultValue={"Low"} name="priority" size="small">
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </Stack>

              <Stack justifyContent={"flex-end"} sx={{ mt: 2, width: "100px" }}>
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
            </FormProvider>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddNote;
