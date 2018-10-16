import * as React from "react";

const initialState = {
  isError: false,
  value: ""
};

export class AddNewItem extends React.Component {
  state = initialState;

  handleButtonClick = () => {
    const isValid = this.state.value && this.state.value.trim();

    if (isValid) {
      this.props.handleButtonClick(this.state.value);
    }

    this.setState({ isError: !isValid, value: "" });
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
        <button onClick={this.handleButtonClick}>Add</button>
        {this.state.isError && <p>Please enter a value.</p>}
      </div>
    );
  }
}
