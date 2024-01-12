import { Component } from "react";

class ClassBasedButtonComponent extends Component {
  state = {
    message1: "subsribe",
    issubscribe: false,
    message2: "subscribed thank you",
  };
  handleSubscribe = () => {
    // alert("hello")
    this.setState(
      {
        issubscribe: !this.state.issubscribe,
      },
      () => {
        console.log(this.state.issubscribe);
      }
    );
  };
  render() {
    return (
      <>
        <button onClick={this.handleSubscribe}>
          {this.state.issubscribe ? this.state.message2 : this.state.message1}
        </button>
        {this.state.issubscribe ? (
          <h1>thanks for subscribe, explore more</h1>
        ) : (
          <h1>please subscribe access the app content</h1>
        )}
      </>
    );
  }
}
export default ClassBasedButtonComponent;
