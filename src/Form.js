import React, { useState } from 'react';

function Form({ onSubmit }) {
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(location);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
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
