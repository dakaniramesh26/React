import React from 'react'
import { useState } from 'react'
import Child from './child'

const Parent = () => {
    const[count,setCounter]=useState(0)

const handleIncrement=()=>{
    setCounter(count+1)
}


  return (
   <>
    <div>{count}</div>
    <button onClick={handleIncrement}>increment</button>
    <Child/>
   </>
  )
}

export default Parent