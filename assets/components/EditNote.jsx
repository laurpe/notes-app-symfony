import React, { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const EditNote = ({ notes, setNotes }) => {
    const id = useParams().id;
    const [inputs, setInputs] = useState({ title: "", note: "" });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    let formData = new FormData();

    formData.append("title", inputs.title);
    formData.append("note", inputs.note);

    const handleSubmit = async (event) => {
        event.preventDefault();
        //TODO: check route
        const response = await axios.put(`/api/notes/${id}`, formData);
        setNotes([...notes, response.data]);
        setInputs({ title: "", note: "" });
    };

    return (
        <div>
            <h2>Edit note</h2>
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

export default EditNote;
