// import React, { useState } from "react"

// const UseStateExample2 =()=>{
//     const[current,setCurrent]=useState([{
//         name:"Ramesh",
//         sal:25000,
//         id:21
//     },
// {
//     name:"Riyan",
//     salary:23000,
//     id:26
// }


// ])
// const [salary,decsal]=useState(current[0].salary)
// const [timer,incsal]=useState(salary)


// const incrementSalary=()=>{
//     decsal(salary+100)
// }
// const decrementSalary=()=>{
// incsal(salary-100)
// }



// return(
//     <>
//     {
//         current.map(value=><React.Fragment key={value.id}>
//     <h1>{value.name}</h1>
//     <h1>{value.salary}</h1>
//     <button onClick={()=>incrementSalary(value)}>incrementSalary</button>
//     <button onClick={()=>decrementSalary(value)}>decrementSalary</button>
//     </React.Fragment>)
//     }
//     </>
// )
// }
// export default UseStateExample2



import React, { useState } from "react";

const UseStateExample2 = () => {
  const [current, setCurrent] = useState([
    {
      name: "Ramesh",
      sal: 25000,
      id: 21,
    },
    {
      name: "Riyan",
      sal: 23000,
      id: 26,
    },
  ]);

  const [salary, setSalary] = useState(current[0].sal);
  const incrementSalary = () => {
    setSalary(salary + 100);
  };

  const decrementSalary = () => {
    setSalary(salary - 100);
  };

  return (
    <>
      {current.map((value) => (
        <React.Fragment key={value.id}>
          <h1>{value.name}</h1>
          <h1>{salary}</h1>
          <button onClick={incrementSalary}>incrementSalary</button>
          <button onClick={decrementSalary}>decrementSalary</button>
        </React.Fragment>
      ))}
    </>
  );
};

export default UseStateExample2;
