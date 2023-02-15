import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Header = () => {
  return (
    <Box component={"div"}>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography
          component={"h1"}
          sx={{ color: "#fff", fontFamily: "inherit", fontSize: "2rem" }}
        >
          Notes App
        </Typography>

        <Button
          disableRipple
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
            color: "#000",
            "&:hover": {
              backgroundColor: "#4dbedd",
            },
          }}
        >
          + Add Note
        </Button>
      </Stack>
    </Box>
  );
};

export default Header;
