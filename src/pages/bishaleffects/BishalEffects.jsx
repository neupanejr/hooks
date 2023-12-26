import React, { useState, useEffect } from 'react';

const BishalEffects = () => {
  // State to store the fetched data
  const [data, setData] = useState(null);

  // Effect to fetch data from JSONPlaceholder API when the component mounts
  useEffect(() => {
    // Define the function to fetch data
    const fetchData = async () => {
      try {
        // Perform the API call to JSONPlaceholder
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        
        // Check if the request was successful (status code 200)
        if (response.ok) {
          // Parse the response JSON and update the state
          const result = await response.json();
          setData(result);
        } else {
          // Handle error cases
          console.error('Failed to fetch data');
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array means this effect runs once when the component mounts

  // Render the component with the fetched data
  return (
    <div>
      <h1>MyComponent</h1>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BishalEffects;
