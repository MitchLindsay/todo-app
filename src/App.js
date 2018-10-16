import React, { Component } from "react";
import { TodoItems } from "./components/TodoItems";
import { AddNewItem } from "./components/AddNewItem";

const initialState = {
  items: ["item 1", "item 2", "item 3"]
};

class App extends Component {
  state = initialState;

  handleButtonClick = newItem => {
    this.setState({ items: [...this.state.items, newItem] });
  };

  render() {
    return (
      <div className="App">
        <TodoItems items={this.state.items} title="TODO App" />
        <AddNewItem
          handleButtonClick={this.handleButtonClick}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
