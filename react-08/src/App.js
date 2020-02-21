import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import DisplaySimpson from "./components/DisplaySimpson";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: {},
      isLoading: true
    };
  }

  componentDidMount() {
    this.getSimpson();
  }

  getSimpson = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({ simpson: data[0], isLoading: false });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Simpson</h1>
        {!this.state.isLoading ? (
          <DisplaySimpson simpson={this.state.simpson} />
        ) : (
            <p>No data yet</p>
          )}
        <button type="button" onClick={this.getSimpson}>
          Get Simpsons
        </button>
      </div>
    );
  }
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
