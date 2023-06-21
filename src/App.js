import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Restaurants from './Restaurants';
import Footer from './Footer';
import './styles.css';

import React, { useEffect } from "react";

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [inputCity, setInputCity] = useState('');

  const handleFormSubmit = async (inputCity) => {
    try {
      const queryURL = 'https://proxy.junocollege.com/https://api.yelp.com/v3/businesses/search';
      const apiKey = 'Bearer 5-p-LWD5Yk5hoDqXSEZ0ysvtzxvM2OdMgkjt-itYb98PfN6ja_M4VRjtO6G0bM8SscNypvSIdQ7EowKRkVnWHuNRQRIfftwNPaghazmR0dnUxSRpStq7U5S5bYNmZHYx';

      const response = await fetch(`${queryURL}?term=restaurants&location=${inputCity}&sort_by=best_match&limit=10`, {
        headers: {
          accept: 'application/json',
          'x-requested-with': 'xmlhttprequest',
          'Access-Control-Allow-Origin': '*',
          Authorization: apiKey,
        },
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      setRestaurantData(data.businesses);
      setInputCity(inputCity);
    } catch (error) {
      console.error('Error:', error);
      setRestaurantData([]);
    }
  };

  return (
    <main className="wrapper">
      <Header />
      <Form onSubmit={handleFormSubmit} />
      <Restaurants restaurants={restaurantData} inputCity={inputCity} />
      <Footer />
    </main>
  );
}

export default App;


// 
// Table for Two App
// 1. Create landing page with the app heading Find a date spot in Toronto
// 2. Create a component called RestaurantList to display the fetched data
// 3. Add a state variable to store the fetched data in the component's state
// 4. Use the useEffect hook to make an API call to the Yelp API when the component mounts.
// 5. Inside the useEffect hook, use Axios to fetch data from the Yelp API. Set the retrieved data to the component's state.
// 6. Render the fetched data in the RestaurantList component.
// 7. Create a separate component to represent each restaurant in the list.
// 8. Pass the restaurant data as props to the new component and render it.
// 9. Style the components using CSS or a styling library to enhance the visual presentation.