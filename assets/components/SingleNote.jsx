import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleNote = ({ notes }) => {
    const id = useParams().id;

    const note = notes.find((note) => note.id == id);
    console.log(note);
    return (
        <>
            <div>
                <h2>{note.title}</h2>
                <p>{note.note}</p>
                <p>{note.date.date.substring(0, 10)}</p>
            </div>
            <Link to="/">Back</Link>
        </>
    );
};

export default SingleNote;
