import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data);
    // console.log(response.data.meanings[0].definition);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    // Used API Documentation: https://www.shecodes.io/learn/apis/dictionary
    // API Used on the SheCodes video: https://dictionaryapi.dev/

    let apiKey = "8f6148bf7t4049b3979ae80dba7bo608";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          onChange={handleKeywordChange}
          type="search"
          autoFocus={true}
          autoComplete="Off"
        />
      </form> 
      <Results results={results}/>
    </div>
  );
}
