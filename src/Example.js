import React from "react";
import "./Example.css";

export default function Example(props) {
  // console.log(props.example);
  if (props.example) {
    return (
      <div className="Example">
        <p>
          <strong>Example: </strong>
          <em>{props.example}</em>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
