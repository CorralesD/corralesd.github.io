import React, { Component } from "react";
import "./App.css";
import { CatLoader } from "./CatLoader";
import { Categories } from "./Categories";
import { CatList } from "./CatList";
import { Input } from "./Input";

class App extends Component {
  state = {
    images: [],
    categories: []
  };

  addCategory = category => {
    this.setState({
      categories: [category, ...this.state.categories]
    });
    // console.log(this.state);
  };

  addImage = imageUrl => {
    this.setState({
      images: [imageUrl, ...this.state.images]
    });
    // console.log(this.state);
  };

  render() {
    return (
      <div className="container row">
        <div className="category_container col-4">
          <Categories categories={this.state.categories} />
          <CatList images={this.state.images} />
        </div>
        <div className="cat_image_container col-3">
          <h2>Cat-egory</h2>
          <CatLoader onClick={this.addImage} />
          <Input onSubmit={this.addCategory} />
        </div>
      </div>
    );
  }
}

export default App;
