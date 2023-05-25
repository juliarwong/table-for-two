import { useState } from "react";

const Form = ({ onSubmit }) => {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(userInput);
    };

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input type="text" id="city" onChange={handleChange} value={userInput} />
        <button>Submit</button>
        </form>
    );
};

export default Form;