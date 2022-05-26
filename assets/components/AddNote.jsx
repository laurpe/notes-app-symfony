import React, { useState } from "react";

import axios from "axios";

const AddNote = ({ notes, setNotes }) => {
    const [inputs, setInputs] = useState({ title: "", note: "" });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    let formData = new FormData();

    formData.append("title", inputs.title);
    formData.append("note", inputs.note);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post("/api/notes", formData);
        setNotes([...notes, response.data]);
        setInputs({ title: "", note: "" });
    };

    return (
        <div>
            <h2>Add new note</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        type="text"
                        value={inputs.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="note">Note</label>
                    <input
                        name="note"
                        type="text"
                        value={inputs.note}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddNote;
