import axios from "axios";
import React from "react";

import { Link } from "react-router-dom";

const Notes = ({ notes, setNotes }) => {
    const handleDelete = async (id) => {
        await axios.delete(`/api/notes/${id}`);
        const notesResult = notes.filter((note) => note.id !== id);
        setNotes(notesResult);
    };

    return (
        <>
            {notes.map((note) => (
                <div key={note.id} className="card">
                    <h2>{note.title}</h2>
                    <p>{note.note}</p>
                    <p>{note.date.date.substring(0, 10)}</p>
                    <button type="button" onClick={() => handleDelete(note.id)}>
                        delete
                    </button>
                    <Link to={`/notes/${note.id}`}>edit</Link>
                </div>
            ))}
        </>
    );
};

export default Notes;
