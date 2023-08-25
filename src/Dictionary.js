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

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function search() {
    // Used API Documentation: https://www.shecodes.io/learn/apis/dictionary
    // API Used on the SheCodes video: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "WoagrkpifpnozEiw2OMJ6YwWPwEg2lUgiLysn49r2dpjy5W4wwseXuM2";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;

    let headers = { "Authorization": `Bearer ${pexelsApiKey}` };
    
    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handlePexelsResponse);
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
