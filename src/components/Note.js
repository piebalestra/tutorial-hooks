import React, { useContext } from "react";
import contextNotes from "../context/notes-context";

const Note = ({ title, body }) => {
	const { dispatch } = useContext(contextNotes);
	return (
		<div key={title}>
			<h3> {title}</h3>
			<p>{body}</p>
			<button onClick={() => dispatch({ type: "REMOVE_NOTE", title })}>x</button>
		</div>
	);
};

export default Note;
