import React from "react";

export class Categories extends React.Component {
  render() {
    return (
      <div>
        <h2>List of Cat-egories</h2>
        {this.props.categories.length === 0 && "Add a Cat-egory"}
        {this.props.categories.map((category, index) => (
          <div key={index}>{category.text}</div>
        ))}
      </div>
    );
  }
}
