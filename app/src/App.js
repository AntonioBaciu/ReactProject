import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import "./App.css";

const App = () => {
  // items = items received from API
  // setItems = change/manipulate the state
  // useState([]) = the empty array [] will be filled with the API data
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // after data is fetched will be set to false

  // fething data from the API using axios
  // here I used the base URL from [source]: [https://breakingbadapi.com/documentation]
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );

      console.log(result.data);
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default App;
