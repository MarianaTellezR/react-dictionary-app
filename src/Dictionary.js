import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleImagesResponse(response) {
    console.log(response);
  }

  function search() {
    // Used API Documentation: https://www.shecodes.io/learn/apis/dictionary
    // API Used on the SheCodes video: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let apiImagesKey = "8f6148bf7t4049b3979ae80dba7bo608";
    let apiImagesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiImagesKey}`;
    let headers = { Authorization: `Bearer ${apiImagesKey}` };
    axios.get(apiImagesUrl, { headers: headers }).then(handleImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="Dictionary-form">
          <p>What word would you like to look up?</p>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleKeywordChange}
              type="search"
              autoFocus={true}
              autoComplete="Off"
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint-words">
            <p>Suggested words: sunset, videogames, plant...</p>
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
