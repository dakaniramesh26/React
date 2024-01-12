import { Component } from "react";
class ClassBasedImageComponent extends Component {
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
        (<img style={{ width: "100px" }} src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600" />)
        : 
        (<img style={{ width: "100px" }} src="https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=600"/>)}
      </div>
    );
  }
}
export default ClassBasedImageComponent;
