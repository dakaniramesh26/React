import { Component } from "react";
import Loader1 from "../../loaders/loader1";
import Loader2 from "../../loaders/loader2";

class Mounting extends Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      message: "good morning",
      color: "red",
      posts: [],
    };
  }
  static getDerivedStateFromProps(props) {
    console.log("getDerivedStateFromProps");

    return { color: props.color };
  }
  componentDidMount() {
    document.title = "Reactapp";
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          posts: response,
        });
      });
  }
  render() {
    console.log("render", this.state.posts);
    return (
      <>
        <h1 style={{ color: this.state.color }}>hello {this.state.message}</h1>
        {this.state.posts.length > 0 ? (
          <>
            {this.state.posts.map((eachPost) => (
              <>
                <h2>{eachPost.title}</h2>
                <h2>{eachPost.id}</h2>
              </>
            ))}
          </>
        ) : (
          <>
            <Loader2 />
            {/* <Loader1/> */}
          </>
        )}
      </>
    );
  }
}
export default Mounting;
