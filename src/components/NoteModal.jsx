import React from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";

import { useForm, FormProvider } from "react-hook-form";

import RHFTextfield from "./hook-form/RHFTextfield";
import RHFSelect from "./hook-form/RHFSelect";

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

const NoteModal = ({ open, handleClose }) => {
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
                New Note
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
        </Box>
      </Fade>
    </Modal>
  );
};

export default NoteModal;
