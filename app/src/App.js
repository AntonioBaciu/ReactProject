import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";

const App = () => {
  // items = items received from API
  // setItems = change/manipulate the state
  // useState([]) = the empty array [] will be filled with the API data
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // after data is fetched will be set to false
  const [query, setQuery] = useState("");

  // Quotes
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get(
        "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
      );
      arrayOfQuotes = data.data;
      // succesfully outputs the author|quote object
      console.log(arrayOfQuotes[0]);
    } catch (error) {
      console.log(error);
    }

    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  // fething data from the API using axios
  // here I used the base URL from [source]: [https://breakingbadapi.com/documentation]
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      // it returns all the characters data from the API
      // console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    // make sure to call the fetchItems() otherwise it's not gonna work
    fetchItems();
  }, [query]);

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="container">
      {quote}
      {author}
      <button onClick={quoteAPI}>New Quote</button>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
