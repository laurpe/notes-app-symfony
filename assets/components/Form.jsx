import React from "react";

const Form = ({ handleSubmit, handleChange, title, inputs }) => {
    return (
        <div className="form">
            <h2>{title}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="title">Title</label>
                    </div>
                    <div>
                        <input
                            name="title"
                            type="text"
                            value={inputs.title}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="note">Note</label>
                    </div>
                    <div>
                        <textarea
                            name="note"
                            value={inputs.note}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Form;
