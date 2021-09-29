/** @format */

import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addNewNote } from "../redux/noteSlice";

const AddNewNotes = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (heading && description) {
      dispatch(addNewNote({ id: Date.now(), heading, description }));
      history.push("/myNote");
      setHeading("");
      setDescription("");
    } else alert("fields cannot be empty");
  };

  return (
    <Container className="container">
      <Box className="container">
        <Typography variant="h4">Add new notes</Typography>
      </Box>
      <Box className="container">
        <Typography variant="h6" className="typographyAndTextField">
          Heading
        </Typography>
        <TextField
          className="typographyAndTextField"
          label="Heading notes"
          variant="outlined"
          size="small"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
      </Box>

      <Box className="container">
        <Typography variant="h6" className="typographyAndTextField">
          Description
        </Typography>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Enter some description"
          style={{ width: 400 }}
          minRows="10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <Box className="container">
        <Button
          sx={{ width: "35%" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Add my note
        </Button>
      </Box>
    </Container>
  );
};

export { AddNewNotes };
