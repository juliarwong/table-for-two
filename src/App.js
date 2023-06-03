import React, { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Restaurants from './Restaurants';
import './styles.css';

function App() {
  const [restaurantData, setRestaurantData] = useState([]);

  const handleFormSubmit = async (inputCity) => {
    try {
      const queryURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
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
    } catch (error) {
      console.error('Error:', error);
      setRestaurantData([]);
    }
  };

  return (
    <main className="wrapper">
      <Header />
      <Form onSubmit={handleFormSubmit} />
      <Restaurants restaurants={restaurantData} />
    </main>
  );
}

export default App;





// import React, { useState } from 'react';
// import Header from './Header';
// import Form from './Form';
// import Restaurants from './Restaurants';
// import './styles.css';

// function App() {
//   const [restaurantData, setRestaurantData] = useState([]);

//   const handleFormSubmit = async (inputCity) => {
//     try {
//       // define the API endpoint URL and the API key
//       const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=toronto&sort_by=best_match&limit=20`;
//       const apiKey = `Bearer 5-p-LWD5Yk5hoDqXSEZ0ysvtzxvM2OdMgkjt-itYb98PfN6ja_M4VRjtO6G0bM8SscNypvSIdQ7EowKRkVnWHuNRQRIfftwNPaghazmR0dnUxSRpStq7U5S5bYNmZHYx`;
//       // const apiKey = 'Bearer5-p-LWD5Yk5hoDqXSEZ0ysvtzxvM2OdMgkjt-itYb98PfN6ja_M4VRjtO6G0bM8SscNypvSIdQ7EowKRkVnWHuNRQRIfftwNPaghazmR0dnUxSRpStq7U5S5bYNmZHYx';
//       // define the query params for the API request
//       const params = new URLSearchParams({
//         term: 'restaurants',
//         location: inputCity,
//         // sort_by: 'best_match',
//         // limit: '10',
//       });

//       // send a GET request to the API endpoint with the query params
//       const response = await fetch(`${url}?${params.toString()}`, {
//         headers: {
//           Authorization: apiKey,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Request failed');
//       }

//       const data = await response.json();
//       setRestaurantData(data.businesses);
//     } catch (error) {
//       console.error('Error:', error);
//       setRestaurantData([]);
//     }
//   };

//   return (
//     <main className="wrapper">
//       <Header />
//       <Form onSubmit={handleFormSubmit} />
//       <Restaurants restaurants={restaurantData} />
//     </main>
//   );
// }

// export default App;




// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import Form from './Form';
// import Restaurants from './Restaurants';
// import './styles.css';

// function App() {
//   // set initial state for city and restaurantData
//   const [city, setCity] = useState('');
//   const [restaurantData, setRestaurantData] = useState([]);
//   const [error, setError] = useState(null);

//   // perform side effect using useEffect
//   useEffect(() => {
//     // define an async function to fetch restaurant data
//     const fetchData = async () => {
//       // define the API endpoint URL and the API key
//       const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`;
//       const apiKey = 'Bearer 5-p-LWD5Yk5hoDqXSEZ0ysvtzxvM2OdMgkjt-itYb98PfN6ja_M4VRjtO6G0bM8SscNypvSIdQ7EowKRkVnWHuNRQRIfftwNPaghazmR0dnUxSRpStq7U5S5bYNmZHYx';
//       // define the query params for the API request
//       const params = new URLSearchParams({
//         term: 'restaurants',
//         location: city,
//         sort_by: 'best_match',
//         limit: '10',
//       });

//       try {
//         // send a GET request to the API endpoint with the query params
//         const response = await fetch(`${url}?${params.toString()}`, {
//           headers: {
//             Authorization: apiKey,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Request failed');
//         }

//         const data = await response.text();

//         try {
//           const parsedData = JSON.parse(data);
//           setRestaurantData(parsedData.businesses);
//           setError(null);
//         } catch (error) {
//           console.error('JSON Parsing Error:', error);
//           setRestaurantData([]);
//           setError('Error parsing data. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         setRestaurantData([]);
//         setError('Error fetching data. Please try again.');
//       }
//     };

//     if (city !== '') {
//       fetchData();
//     }
//   }, [city]);

//   // define a function to handle form submission
//   const handleFormSubmit = (inputCity) => {
//     // update the city state with the input value
//     setCity(inputCity);
//   };


//   // render the main component
//   return (
//     <main className="wrapper">
//       <Header />
//       <Form onSubmit={handleFormSubmit} />
//       <Restaurants restaurants={restaurantData} />
//     </main>
//   );
// }

// export default App;




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