import React, { useMemo, useState } from 'react'

function Childusememo({greeting}) {
    
    const[age,setAge]=useState(10)
    const upperCaseMemorizedValue=useMemo( ()=>{
       console.log("lowertouppercase")
        // for(let i=0;i<100000;i++){
        //     console.log(i)
        // }
        const upperCase=greeting.toUpperCase()
        return upperCase
    },[greeting])
   
    const ageIncrement=()=>{
        console.log("increse age")
        setAge(age+10)
    }

  return (

    <div>
        <h2>{upperCaseMemorizedValue}</h2>
        <h2>{age}</h2>
        <button onClick={ageIncrement}>click to increase</button>
    
    </div>

  )
}

export default Childusememo