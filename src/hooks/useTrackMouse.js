import React, { useState, useContext, Fragment } from "react";
import contextNotes from "../context/notes-context";

const useMousePosition = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		return () => {
			cleanup;
		};
	}, []);
};

export default useMousePosition;
