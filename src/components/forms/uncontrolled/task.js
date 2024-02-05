import { useState } from "react";

function Hello(){
        const[circles,setCircles]=useState([])

       const addCircles=()=>{
        setCircles([...circles,false])
       } 
const circleClick=(index)=>{
    setCircles([...circles])
    console.log(index)
    console.log(circles)
}

return(
    <>
    <button onClick={addCircles}>add circles</button>
    <h2>total Circles{circles.length}</h2>
    {
    circles.map((value,index)=>
    <div key={index} style={{width:100,height:100,border:"2px solid black",borderRadius:"50%"}} onClick={()=>circleClick(index)}></div>
    

)

}

</>
)
}
export default Hello