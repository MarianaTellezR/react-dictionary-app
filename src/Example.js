import React from "react";

export default function Example(props) {
  // console.log(props.example);
  if (props.example) {
    return (
      <p>
        <strong>Example: </strong>
        <em>{props.example}</em>
      </p>
    );
  } else {
    return null;
  }
}
