// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
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




// const App = () => {
//   const [businesses, setBusinesses] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://proxy.junocollege.com/ https://api.yelp.com/v3/categories',
//           {
//             headers: {
//               Authorization: 'Bearer 5-p-LWD5Yk5hoDqXSEZ0ysvtzxvM2OdMgkjt-itYb98PfN6ja_M4VRjtO6G0bM8SscNypvSIdQ7EowKRkVnWHuNRQRIfftwNPaghazmR0dnUxSRpStq7U5S5bYNmZHYx',
//             },
//           }
//         );

//         setBusinesses(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching data from Yelp API:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Business Information</h1>
//       {businesses && (
//         <div>
//           <h2>{businesses.name}</h2>
//           <p>Rating: {businesses.rating}</p>
//           <p>Phone: {businesses.phone}</p>
//           <p>Address: {businesses.location?.address1}, {businesses.location?.city}</p>
//         </div>
//       )}
//     </div>
//   );
// };

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