import * as React from "react";

export const TodoItems = props => {
  var items = props.items.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>{items}</ul>
    </div>
  );
};
