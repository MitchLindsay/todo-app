import * as React from "react";
import { Button } from "./Button";

const initialState = {
  isError: false,
  value: ""
};

export class AddNewItem extends React.Component {
  state = initialState;

  handleButtonClick = () => {
    const isValid = this.state.value && this.state.value.trim();

    if (isValid) {
      this.props.handleButtonClick([this.state.value, false]);
    }

    this.setState({ isError: !isValid, value: "" });
  };

  removeButtonClick = () => {
    this.props.removeButtonClick();
  };

  handleInputChange = e => {
    this.setState({ isError: false, value: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleInputChange}
          type="text"
          value={this.state.value}
        />
        <Button label="Add" handleButtonClick={this.handleButtonClick} />
        {this.props.isRemoveVisible && (
          <Button label="Remove" handleButtonClick={this.removeButtonClick} />
        )}
        {this.state.isError && <p>Please enter a value.</p>}
      </div>
    );
  }
}
