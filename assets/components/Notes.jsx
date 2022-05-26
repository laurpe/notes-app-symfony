import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

import { Link } from "react-router-dom";

const Notes = ({ notes, setNotes }) => {
    const [editedNote, setEditedNote] = useState({
        id: "",
        title: "",
        note: "",
    });

    const handleDelete = async (id) => {
        await axios.delete(`/api/notes/${id}`);
        const notesResult = notes.filter((note) => note.id !== id);
        setNotes(notesResult);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        console.log("edit submitted");
    };

    const handleChange = (event) => {
        setEditedNote({
            ...editedNote,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    {note.title}{" "}
                    <button type="button" onClick={() => handleDelete(note.id)}>
                        delete
                    </button>
                    <Link to={`/notes/${note.id}`}>edit</Link>
                </li>
            ))}
        </ul>
    );
};

export default Notes;
