import React from 'react';

function Restaurants({ restaurants }) {
    return (
        <div>
        <h2>Restaurants</h2>
        {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
            <div key={restaurant.id}>
                <h3>{restaurant.name}</h3>
                <p>{restaurant.location.address1}</p>
                <p>{restaurant.phone}</p>
            </div>
            ))
        ) : (
            <p>No restaurants found</p>
        )}
        </div>
    );
}

export default Restaurants;
