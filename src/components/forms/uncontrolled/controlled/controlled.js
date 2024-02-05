import { useState } from "react";

const Controlled = () => {
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password,setPassword]=useState("")
  const [passwordError,setPasswordError]=useState("")

  const userHandler = (event) => {
    setUserName(event.target.value);
      if (userName.length > 9) {
      setUserNameError("Enter below 10 characters");
    } else {
      setUserNameError("");
    }
  };

  const passwordHandler=(event)=>{
      setPassword(event.target.value)
      console.log(event.target.value)
      const result=validatePassword(event.target.value)
     if(result){
     console.log("password valid")
     setPasswordError("")

     }
     else{
      setPasswordError("pasward invlaid");
     }
  }


  const username = "k3llydev";
  function validatePassword(psw)
  {
    let msg = true
  
    switch (true) {
    case  (psw.length < 8 || psw.length > 13):
      msg = false
      break
    case  (!(/[0-9]/.test(psw))):
      msg = false
      break
    case (psw == psw.toLowerCase()) || (psw == psw.toUpperCase()):
      msg = false
      break
    case ( psw.includes(username)):
      msg = false
      break
    }
    return msg
  }
  const submitHandler=(event)=>{
      event.preventDefault()
      
      const userDetails={
        username:username,
        passward:password
      } 
      console.log(userDetails)
  }



  return (
    <>
      <form action="/action_page.php"  onSubmit={submitHandler}>
        <div className="form-group">
          <label>Email address:</label>
          <input
            style={{borderColor:userNameError && userName.length > 10 ? "red" : null}}
            type="text" className="form-control" id="email" value={userName} onChange={userHandler}/>
        {userNameError ? <p style={{ color: "red" }}>{userNameError}</p> : null}
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input  style={{borderColor:passwordError && password.length>10?"red":null}} type="password" className="form-control" id="pwd" value={password} onChange={passwordHandler} />
          {passwordError ? <p style={{color:"red"}}>{passwordError}</p>: null }
        </div>
        <br></br>
        {
          userNameError || passwordError ? null: <button type="submit" className="btn btn-primary">Submit</button>
        }
        
      </form>
    </>
  );
};

export default Controlled;
