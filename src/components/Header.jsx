import { useContext, useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";

import { NotesContext } from "../context/NotesContextProvider";
import AddNote from "./AddNote";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState("All");

  const handleOpen = () => setOpen(true);
  const handleClose = (reset) => {
    setOpen(false);
    reset();
  };

  const { setPriority } = useContext(NotesContext);

  const handleChange = (e) => {
    const { value } = e.target;

    setState(value);
  };

  useEffect(() => {
    setPriority(state);
  }, [state]);

  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          m: "1rem 0",
        }}
      >
        <Typography
          component={"h1"}
          sx={{ color: "#000", fontFamily: "inherit", fontSize: "2rem" }}
        >
          Notes App
        </Typography>

        <Button
          disableRipple
          onClick={handleOpen}
          sx={{
            borderRadius: "8px",
            border: "1px solid transparent",
            padding: "0.6em 1.2em",
            fontSize: "1em",
            fontWeight: 500,
            fontFamily: "inherit",
            backgroundColor: "#61dafb",
            cursor: "pointer",
            transition: "border-color background 0.25s",
            outline: "none",
            color: "#000",
            "&:hover": {
              backgroundColor: "#4dbedd",
            },
          }}
        >
          + Add Note
        </Button>
      </Stack>
      <Stack
        justifyContent={"flex-end"}
        direction="row"
        alignItems="center"
        sx={{ m: "1rem 0" }}
      >
        <Select
          size="small"
          defaultValue={"All"}
          name="select-priority"
          value={state}
          sx={{ width: "200px", backgroundColor: "#fff", mt: "2rem" }}
          onChange={handleChange}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </Stack>

      <AddNote handleClose={handleClose} open={open} />
    </>
  );
};

export default Header;
