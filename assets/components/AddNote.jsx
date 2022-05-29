import React, { useState } from "react";

import Form from "./Form";

import axios from "axios";

const AddNote = ({ notes, setNotes }) => {
    const [inputs, setInputs] = useState({ title: "", note: "" });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post("/api/notes", inputs);
        setNotes([...notes, response.data]);
        setInputs({ title: "", note: "" });
    };

    return (
        <Form
            title="Add new note"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputs={inputs}
        />
    );
};

export default AddNote;
