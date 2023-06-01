import React, { useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import Restaurants from './Restaurants';
import './styles.css';

function App() {
  // State to store the user input for location and fetched restaurant data
  const [location, setLocation] = useState('');
  const [restaurantData, setRestaurantData] = useState([]);

  useEffect(() => {
    // Function to fetch restaurant data based on the selected location
    const fetchData = async () => {
      // Set up the request options including headers
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer 5-p-LWD5Yk5hoDqXSEZ0ysvtzxvM2OdMgkjt-itYb98PfN6ja_M4VRjtO6G0bM8SscNypvSIdQ7EowKRkVnWHuNRQRIfftwNPaghazmR0dnUxSRpStq7U5S5bYNmZHYx'
        }
      };

      try {
        // Make the API call and get the response
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=best_match&limit=20`, options);
        const data = await response.json();
        
        // Update the restaurant data state with the fetched data
        setRestaurantData(data.businesses);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Call the fetchData function when the location changes
    fetchData();
  }, [location]);

  // Function to handle form submission and update the location state
  const handleFormSubmit = (inputLocation) => {
    setLocation(inputLocation);
  };

  return (
    <main className="wrapper">
      <Header />
      {/* Pass the handleFormSubmit function as a prop */}
      <Form onSubmit={handleFormSubmit} />
      {/* Pass the fetched restaurant data as a prop */}
      <Restaurants restaurants={restaurantData} />
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