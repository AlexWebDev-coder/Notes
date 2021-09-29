/** @format */

import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useDispatch } from "react-redux";

import { changeEvent } from "../redux/noteSlice";

const NoteEdit = ({ element }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(element);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(changeEvent(value));
    setOpen(false);
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Button variant="text" onClick={() => setOpen(true)}>
        <EditRoundedIcon />
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Heading"
            fullWidth
            variant="standard"
            name="heading"
            value={value.heading}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            fullWidth
            variant="standard"
            value={value.description}
            onChange={(e) => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleEdit}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { NoteEdit };
