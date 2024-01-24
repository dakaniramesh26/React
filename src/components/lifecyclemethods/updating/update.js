import { Component } from "react";
import Child from "./child";

class UpdatePhase extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    HaandleIncrement=(data)=>{
        this.setState({
            count:this.state.count + data
        })
    }
    render(){
        return(
            <>
            <h1>hello</h1>
            <h1>{this.state.count}</h1>
            <Child/>
            </>
        )
    }
}
export default UpdatePhase