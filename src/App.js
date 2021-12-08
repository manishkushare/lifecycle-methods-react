import "./styles.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    console.log("constructor");
    this.state = {
      counter: 0,
      visible: "first"
    };
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
        visible: prevState.visible === "first" ? "second" : "first"
      };
    });
  };
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    let counter = this.state.counter;
    return (
      <>
        <h1>{counter}</h1>
        {this.state.visible === "first" ? <First /> : <Second />}
        <button onClick={this.handleClick}>Change</button>
      </>
    );
  }
}

class First extends React.Component {
  constructor(props) {
    super();
    console.log("inside first Component");
  }
  render() {
    console.log("render");

    return (
      <>
        <h1>First</h1>
      </>
    );
  }
}
class Second extends React.Component {
  constructor(props) {
    super();
    console.log("inside second Component");
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>Second</h1>
      </>
    );
  }
}
export default App;
