import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: "add",
      items: [],
    };

    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.add = this.add.bind(this);
  }

  selectAdd(e) {
    console.log(e);
    this.setState({
      activeTab: "add",
    });
  }
  selectList(e) {
    this.setState({
      activeTab: "list",
    });
  }
  selectPay(e) {
    this.setState({
      activeTab: "pay",
    });
  }

  add(name, price) {
    const obj = {
      name: name,
      price: price,
    };
    const newList = this.state.items;
    newList.push(obj);
    newList.sort(function (a, b) {
      return a.price - b.price;
    });
    this.setState({
      items: newList,
    });
  }

  renderContent = () => {
    switch (this.state.activeTab) {
      case "add":
        return <Add addItem={this.add}></Add>;
      case "list":
        return <List listItems={this.state.items}></List>;
      case "pay":
        return <Pay></Pay>;
      default:
        return null;
    }
  };
  render() {
    return (
      <div className="App">
        <Button
          onClick={this.selectAdd}
          isSelected={this.state.activeTab === "add" ? true : false}
        >
          Add
        </Button>

        <Button
          onClick={this.selectList}
          isSelected={this.state.activeTab === "list" ? true : false}
        >
          List
        </Button>

        <Button
          onClick={this.selectPay}
          isSelected={this.state.activeTab === "pay" ? true : false}
        >
          pay
        </Button>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
