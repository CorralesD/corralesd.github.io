import React from "react";

export class CatList extends React.Component {
  render() {
    return (
      <div>
        <h2>List of Images</h2>
        {this.props.images.length === 0 && "Click on image to display here"}
        <div className="row">
          {this.props.images.map((image, index) => (
            <div key={index} className="col mb-3">
              <img
                src={image}
                style={{ maxWidth: "150px", maxHeight: "150px" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
