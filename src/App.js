// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import React, { useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import Restaurants from "./Restaurants";
import "./App.css";

function App() {
  const fetchRestaurants = async () => {
    const url = new URL("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search");
    const params = new URLSearchParams({
      location: "toronto",
      term: "restaurants"
    });

    url.search = params;

    const headers = {
      Authorization: "Bearer 5-p-LWD5Yk5hoDqXSEZ0ysvtzxvM2OdMgkjt-itYb98PfN6ja_M4VRjtO6G0bM8SscNypvSIdQ7EowKRkVnWHuNRQRIfftwNPaghazmR0dnUxSRpStq7U5S5bYNmZHYx" 
    };

    try {
      const response = await fetch(url, {
        headers: headers
      });
      const data = await response.json();
      // Process the data or perform any other actions based on the API response
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <main className="wrapper">
      <Header />
      <Form />
      <Restaurants />
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