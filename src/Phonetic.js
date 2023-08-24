import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i class="fa-solid fa-volume-high"></i>
      </a>   {"  "}
      {props.phonetic.text}
    </div>
  );
}
