import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i className="fa-solid fa-volume-high"></i>
      </a>{" "}
      {"  "}
      <span className="text-phonetics">{props.phonetic.text}</span>
    </div>
  );
}
