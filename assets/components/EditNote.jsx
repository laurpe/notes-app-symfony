import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Form from "./Form";

import axios from "axios";

const EditNote = ({ notes, setNotes }) => {
    const [inputs, setInputs] = useState({ title: "", note: "" });
    const id = useParams().id;

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.put(`/api/notes/${id}`, inputs);
        setNotes([...notes, response.data]);
        setInputs({ title: "", note: "" });
        location.reload();
    };

    return (
        <Form
            title="Edit note"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputs={inputs}
        />
    );
};

export default EditNote;
