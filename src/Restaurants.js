import React from 'react';

function Restaurants({ restaurants, inputCity }) {
    if (!restaurants || restaurants.length === 0) {
        return <p>No restaurants found</p>;
    }

    return (
        <div>
        <h2>Top Restaurants in {inputCity}</h2>
        {restaurants.map((restaurant) => (
            <div key={restaurant.id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.location.address1}</p>
            <p>{restaurant.phone}</p>
            </div>
        ))}
        </div>
    );
}

export default Restaurants;