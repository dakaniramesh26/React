import { getValue } from "@testing-library/user-event/dist/utils"
import React, { useState } from "react"

const UseStateExample3 =()=>{
const initialValue=["apple","kiwi"]
const[list,setList]=useState(initialValue)  

const handleClick=()=>{
    const neewFruit="mango"
    setList([...list,neewFruit])

}
    
return(
        <>
        <h2>hello</h2>
        <button onClick={handleClick}>Click to add</button>
        <ol>
         {
            list.map(
                    (value,index)=><React.Fragment key={index}>
                    <li>{value} </li>
                    </React.Fragment>
            )
         }
         </ol>
        </>
    )
}
export default UseStateExample3