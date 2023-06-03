import React, { useState } from "react";

const Form = ({ onSubmit }) => {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(userInput);
        setUserInput(""); // Reset the input field
    };

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="city"></label>
        <input type="text" placeholder="Enter a city" id="city" onChange={handleChange} value={userInput} />
        <button type="submit">Submit</button>
        </form>
    );
};

export default Form;



// import React, { useState } from 'react';

// function Form({ onSubmit }) {
//     const [inputCity, setInputCity] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         onSubmit(inputCity); // call the onSubmit function passed as a prop
//         setInputCity(''); // reset the input field
//     };

//     const handleChange = (event) => {
//         setInputCity(event.target.value);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//         <input
//             type="text"
//             placeholder="Enter city"
//             value={inputCity}
//             onChange={handleChange}
//         />
//         <button type="submit">Search</button>
//         </form>
//     );
// }

// export default Form;
