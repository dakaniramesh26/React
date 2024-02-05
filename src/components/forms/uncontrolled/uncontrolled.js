import userEvent from "@testing-library/user-event";
import { useContext, useRef, useState } from "react"
import { DataShare } from "../../../navigationStack/navigation";

const UnControlled =()=>{

const emailRef=useRef()
const passwordRef=useRef() 
const[error,setError ]=useState("")
const {loginTrue}=useContext(DataShare)


  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    if(passwordRef.current.value.length<3){
     alert("please enter more than 3 charecters");
    }
    else{

      const userInfo={
        username:emailRef.current.value,
        password:passwordRef.current.value
      }
        hitServer(userInfo)
    }
    // alert("submitted")
        
  }

  const hitServer =(data)=>{
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then((res) => res.json())
.then(res=>{
  if(res.message){
    alert(res.message)
    setError(res.message)
  }
  else{
    alert("succussful login")
    loginTrue() 
    localStorage.setItem("userLoginInfo",JSON.stringify(res))
    
  }
})
// .then((res) => console.log(res))
// .catch((err) => console.log(err))
  }
    return(
        <>
      <form action="/action_page.php" onSubmit={handleSubmit}>
  <div className="form-group">
    <label >Email address:</label>
    <input type="text" className="form-control" id="email" ref={emailRef}/>
  </div>
  <div className="form-group">
    <label >Password:</label>
    <input type="password" className="form-control" id="pwd" ref={passwordRef}/>
  </div><br></br>
  {
    error ?
    <h2 style={{color:"red"}}>{error}</h2>
    :
    null
  }
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
        </>
    )
}
export default UnControlled