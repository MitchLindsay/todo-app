import React, { Component } from "react";
import { TodoItems } from "./components/TodoItems";
import { AddNewItem } from "./components/AddNewItem";

const initialState = {
  items: [["item 1", false], ["item 2", false], ["item 3", false]]
};

class App extends Component {
  state = initialState;

  handleButtonClick = newItem => {
    this.setState({ items: [...this.state.items, newItem] });
  };

  handleRemoveClick = () => {
    let items = [];
    this.state.items.forEach((item, index) => {
      items = this.state.items.filter(obj => obj[1] === false);
    });

    this.setState({
      items
    });
  };

  onCheckboxClick = item => () => {
    item[1] = !item[1];

    this.setState({
      items: this.state.items
    });
  };

  render() {
    return (
      <div className="App">
        <TodoItems
          items={this.state.items}
          onCheckboxClick={this.onCheckboxClick}
          title="TODO App"
        />
        <AddNewItem
          isRemoveVisible={this.state.items && this.state.items.length > 0}
          handleButtonClick={this.handleButtonClick}
          removeButtonClick={this.handleRemoveClick}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default App;
