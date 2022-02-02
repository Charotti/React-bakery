import React from "react";

class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      productName: "",
      price: 1,
    };

    this.updateProductName = this.updateProductName.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.click = this.click.bind(this);
  }

  updateProductName(e) {
    this.setState({
      productName: e.target.value,
    });
  }
  updatePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }
  click = () => {
    this.props.addItem(this.state.productName, this.state.price);
    this.setState({
      productName: "",
      price: 1,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <input
            type="text"
            className="col-10"
            onChange={this.updateProductName}
            value={this.state.productName}
          ></input>
          <button
            type="text"
            className="btn btn-primary col-2"
            onClick={this.click}
          >
            Add
          </button>
        </div>
        <div className="row">
          <input
            type="range"
            value={this.state.price}
            onChange={this.updatePrice}
            min="1"
            max="10"
          ></input>

          <span>{this.state.price}</span>
        </div>
      </div>
    );
  }
}
export default Add;
