import * as React from "react";

export const Button = props => (
  <button onClick={props.handleButtonClick}>{props.label}</button>
);
