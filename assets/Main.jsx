import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Main = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getNotes = async () => {
            const response = await axios.get("/api/notes");
            setNotes(response.data);
        };
        getNotes();
    }, []);

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Notes notes={notes} setNotes={setNotes} />}
                    />
                    <Route
                        path="/add"
                        element={<AddNote notes={notes} setNotes={setNotes} />}
                    />
                    <Route
                        path="/notes/:id"
                        element={<EditNote notes={notes} setNotes={setNotes} />}
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Main;

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
