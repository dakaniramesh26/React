import { Component } from "react";
import { RotatingLines } from "react-loader-spinner";
class Loader2 extends Component {
  render() {
    return (
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}
export default Loader2;
