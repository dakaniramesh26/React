import { Component } from "react";
class ClassBasedColorComponent extends Component {
  state = {
    message1: "subscribe",
    issubscribe: false,
    message2: "subscribed thank you",
  };
  handlesubscribe = () => {
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
      <div>
        <button onClick={this.handlesubscribe}>
          {this.state.issubscribe ? this.state.message2 : this.state.message1}
        </button>
        {this.state.issubscribe 
        ?
        (<div style={{color:"blue", width:"100px",height:"100px"}}>hello</div>)
        : 
        (<div style={{color:"green", width:"100px",height:"100px"}}>hello123</div>)}
      </div>
    );
  }
}
export default ClassBasedColorComponent;