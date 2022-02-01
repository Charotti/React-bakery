import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: "add",
      items: [],
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col col-lg-6 ">
              <div className="d-grid gap-2 d-md-block my-5">
                <button className="btn btn-primary mx-1" type="button">
                  Add
                </button>
                <button className="btn btn-primary mx-1" type="button">
                  List
                </button>
                <button className="btn btn-primary mx-1" type="button">
                  Play
                </button>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label=""
                  aria-describedby="basic-addon2"
                />
                <button className="btn btn-primary mx-1" type="button">
                  Add
                </button>
              </div>
              <label for="customRange1" className="form-label mt-2">
                Example range
              </label>
              <input type="range" className="form-range" id="customRange1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
