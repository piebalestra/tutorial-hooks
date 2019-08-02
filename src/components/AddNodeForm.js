import React, { useState, useContext, Fragment } from "react";
import contextNotes from "../context/notes-context";

const AddNodeForm = () => {
	const { dispatch } = useContext(contextNotes);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const addNote = e => {
		e.preventDefault();
		dispatch({ type: "ADD_NOTE", title, body });
		setTitle("");
		setBody("");
	};

	return (
		<Fragment>
			<p>Add note</p>
			<form onSubmit={addNote}>
				<input value={title} onChange={e => setTitle(e.target.value)} />
				<textarea value={body} onChange={e => setBody(e.target.value)} />
				<button>Add note</button>
			</form>
		</Fragment>
	);
};

export default AddNodeForm;
