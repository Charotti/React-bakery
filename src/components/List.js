import React from "react";

class List extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul>
        {this.props.listItems.map((curr, index) => {
          return (
            <li key={index}>
              {curr.name} - {curr.price}
            </li>
          );
        })}
      </ul>
    );
  }
}
export default List;
