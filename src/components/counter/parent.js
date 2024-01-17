import { Component } from "react";
import ChildButton from "./child";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncrement = (data) => {
    this.setState({
      count: this.state.count + data,
    });
  };
  render() {
    return (
      <>
        <h1>hello</h1>
        <h1>{this.state.count}</h1>
        <ChildButton HandleincrementMethod={this.handleIncrement} />
      </>
    );
  }
}
export default Parent;
