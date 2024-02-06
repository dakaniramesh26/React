import React, { useReducer, useState } from 'react'
const reducerFunction =(state,action)=>{
console.log(state);
console.log(action);

switch(action.type){
  case "INCREMENT_ACTION":
    return{...state,age:state.age+1}
  case "DECREMENT-ACTION":
  return{...state,age:state.age-1}
  case "ADD_TODO":
    return{...state,todos:[...state.todos,action.next]}
  case "DELETE_TODO":
    const id=2
    const result=state.todos.filter()
    default:
      return state
}

}
const initialState={
    age:20,
    name:"Usereducerfunction ",
    todos:[]
}
const UseReducerEx = () => {

const [currentState,dispatchFunction] =useReducer(reducerFunction,initialState)
const [value,setValue]=useState("")
console.log(currentState);
const increment=()=>{
dispatchFunction(
    {
        type:"INCREMENT_ACTION"   
    }
)
}
const decrement=()=>{
    dispatchFunction(
      {
        type:"DECREMENT-ACTION"
      }
    )

}
const onChangeHandler=(event)=>{
  setValue(event.target.value)
}

const addTodo=()=>{
  dispatchFunction(
  {
    type :"ADD_TODO",
    next:value
  }
  )
}
  return (
    <>
    <div> im from usereducer</div>
    <h2>{currentState.age}</h2>
    <button onClick={increment}>Increment age</button>
    <button onClick={decrement}>Decrement age</button>
    <input value={value}
    onChange={onChangeHandler}
    />
    <button onClick={addTodo}>add todo</button>
    {
      currentState.todos.map((value,index)=><h5 key={index}>{value}</h5>)

    }

    </>

   
  )

}

export default UseReducerEx