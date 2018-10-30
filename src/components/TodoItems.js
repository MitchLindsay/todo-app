import * as React from "react";

export const TodoItems = props => {
  var items = props.items.map((item, index) => (
    <li key={index}>
      <input
        checked={item[1]}
        onChange={props.onCheckboxClick(item)}
        type="checkbox"
      />
      {item[0]}
    </li>
  ));

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>{items}</ul>
    </div>
  );
};
