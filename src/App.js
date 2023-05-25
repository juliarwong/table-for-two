import './App.css';

import React, { useEffect } from "react";

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
      <h1>Table for Two!</h1>
    </main>
  );
}

export default App;
