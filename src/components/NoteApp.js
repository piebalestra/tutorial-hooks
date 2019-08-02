import React, { useEffect, useReducer } from "react";
import notesReducer from "../reducers/notesReducer";
import NoteList from "./NoteList";
import AddNodeForm from "./AddNodeForm";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
	const [notes, dispatch] = useReducer(notesReducer, []);

	useEffect(() => {
		const notes = JSON.parse(window.localStorage.getItem("notes"));
		if (notes) {
			dispatch({ type: "POPULATE_NOTES", notes });
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<NotesContext.Provider value={{ notes, dispatch }}>
			<h1>Notes</h1>
			<NoteList />
			<AddNodeForm />
		</NotesContext.Provider>
	);
};

export default NoteApp;
