/** @format */

import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import { NoteEdit } from "./NotesEdit";

import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../redux/noteSlice";

const MyNotes = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { myNotes } = useSelector((state) => state.note);

  return (
    <Container>
      <Box className="myNotes">
        <Typography variant="h4">My notes</Typography>
        <Button variant="contained" onClick={() => history.push("/")}>
          Add Notes
        </Button>
      </Box>
      {myNotes.map((el, idx) => (
        <Box key={el.id}>
          <Typography variant="h6">Notes # {idx + 1}</Typography>
          <Box className="notes myNotes">
            <Box>
              <Typography variant="h5">{el.heading}</Typography>
              <Typography variant="h6" color="#999">
                {el.description}
              </Typography>
            </Box>
            <Box>
              <NoteEdit element={el} />

              <DeleteOutlineRoundedIcon
                onClick={() => dispatch(deleteNote(el.id))}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export { MyNotes };
