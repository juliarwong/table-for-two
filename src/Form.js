import React, { useState } from 'react';

function Form({ onSubmit }) {
    const [location, setLocation] = useState('');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(location);
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={handleLocationChange}
        />
        <button type="submit">Search</button>
        </form>
    );
}

export default Form;
