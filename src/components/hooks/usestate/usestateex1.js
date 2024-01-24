import { useState } from "react"

const UseStateExample1 =()=>{

const initialValue=20

const[count,setCount]=useState(initialValue)
const[timer,settimer]=useState(initialValue)


const handleIncrement =()=>{
    setCount(count+1)
}
const handleTimer=()=>{
setInterval(()=>{
if(timer===0){
    alert("time up")
}
else{
    settimer(timer=>timer-1)
}
},1000)
}
    return(
        <>
        <h1>its UseStateExample {count}</h1>
        <h1 style={{color:timer>10?"black":"red"}}>timer {timer}</h1>
        <button onClick={handleIncrement}>increment count</button>
        <button onClick={handleTimer}>increment timer</button>
        </>
    )
}
export default UseStateExample1