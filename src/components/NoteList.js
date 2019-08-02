import React, { useContext } from "react";
import Note from "./Note";
import contextNotes from "../context/notes-context";

const NodeList = () => {
	const { notes } = useContext(contextNotes);
	return notes.map(({ title, body }) => <Note key={title} title={title} body={body} />);
};

export default NodeList;
