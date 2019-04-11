import React from "react";
import { fetchRandomCat } from "./catApi";

export class CatLoader extends React.Component {
  // TODO, fetchRandomCat
  state = {
    imgUrl: ""
  };

  async componentDidMount() {
    const { data } = await fetchRandomCat();
    const imgUrl = data.file;

    this.setState({ imgUrl });
  }

  handleReload = async () => {
    const { data } = await fetchRandomCat();
    const imgUrl = data.file;

    this.setState({ imgUrl });
  };

  handleClick = () => {
    const currentImage = this.state.imgUrl;
    this.props.onClick(currentImage);
  };

  render() {
    return (
      <div>
        <img
          onClick={this.handleClick}
          src={this.state.imgUrl}
          style={{ maxHeight: "300px" }}
          alt="random-cat"
        />
        <button
          onClick={this.handleReload}
          className="btn btn-warning mt-3"
          style={{ display: "block" }}
        >
          Reload
        </button>
      </div>
    );
  }
}
