import React from "react";

export class Input extends React.Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      text: this.state.text,
      count: 0
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="input-group input-group-sm mt-3"
        >
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
            className="form-control"
            placeholder="Add a Category"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
