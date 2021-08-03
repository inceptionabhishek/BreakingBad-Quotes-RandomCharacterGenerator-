import Header from "./components/Header";
import "./index.css";
import React, { useState } from "react";
import QuotesContentDisplay from "./components/QuotesContentDisplay";
import RandomCharacters from "./components/RandomCharacters";
 const api = {
   base: "https://breaking-bad-quotes.herokuapp.com/v1/quotes/10",
 };
function App() {
  const [quotes, setQuotes] =useState([]);
const handleClick =  () => {
  fetch(api.base)
    .then((res) => res.json())
    .then((result) => {
      setQuotes(result);
      console.log(result);
      console.log(quotes);
    });
};
  return (
    <div >
      <Header />
      <button className="btn" onClick={handleClick}>
        Get Random Quote
      </button>
      <div>
        {quotes.map((values) => (
          <QuotesContentDisplay text={values.quote} Actor={values.author} />
        ))}
      </div>
      <RandomCharacters />
    </div>
  );
}

export default App;
