import { useState } from "react";

const ControlledTask = () => {

  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password,setPassword]=useState("")
  const [passwordError,setPasswordError]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [confirmPasswordError,setConfirmPasswordError]=useState("")

  const userHandler = (event) => {
    setUserName(event.target.value);
      if (userName.length > 10) { 
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

  const confirmPasswordHandler=(event)=>{
    setConfirmPassword(event.target.value)
    const cresult=validatePassword(event.target.value)
    if(cresult){
        console.log("password valid")
        setConfirmPasswordError("")
    }
    else{
        setConfirmPasswordError("password invalid")
    }
  }

 


  const username = "k3llydev";
  function validatePassword(confirmPassword)
  {
    let msg = true
  
    switch (true) {
    case  (confirmPassword.length < 8 || confirmPassword.length > 13):
      msg = false
      break
    case  (!(/[0-9]/.test(confirmPassword))):
      msg = false
      break
    case (confirmPassword == confirmPassword.toLowerCase()) || (confirmPassword == confirmPassword.toUpperCase()):
      msg = false
      break
    case ( confirmPassword.includes(username)):
      msg = false
      break
    }
    return msg
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // const cusername = "k3llydev";
  // function validatePassword(cconfirmPassword)
  // {
  //   let msg = true
  
  //   switch (true) {
  //   case  (cconfirmPassword.length < 8 || cconfirmPassword.length > 13):
  //     msg = false
  //     break
  //   case  (!(/[0-9]/.test(cconfirmPassword))):
  //     msg = false
  //     break
  //   case (confirmPassword == confirmPassword.toLowerCase()) || (confirmPassword == confirmPassword.toUpperCase()):
  //     msg = false
  //     break
  //   case ( confirmPassword.includes(username)):
  //     msg = false
  //     break
  //   }
  //   return msg
  // }




  const submitHandler=(event)=>{
      event.preventDefault()

      if(password==confirmPassword){
        alert("success")
      }
      else{
        alert("wrong credentials")
      }
      
      const userDetails={
        username:username,
        passward:password,
        confirmPassword:confirmPassword
      } 
      console.log(userDetails)
  }



  return (
    <>
    <center>
    <div>
      <form  action="/action_page.php"    onSubmit={submitHandler}>
        <div className="form-group">
          <label>Email address:</label>
          <input
            style={{borderColor:userNameError && userName.length  > 10 ? "red" : null, width:"300px"}}
            type="text" className="form-control" id="email" value={userName} onChange={userHandler}/>
        {userNameError ? <p style={{ color: "red" }}>{userNameError}</p> : null}
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input  style={{borderColor:passwordError && password.length>10?"red":null, width:"300px", textAlign:"center",alignContent:"center",}} type="password" className="form-control" id="pwd" value={password} onChange={passwordHandler} />
          {passwordError ? <p style={{color:"red"}}>{passwordError}</p>: null }
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input  style={{borderColor:confirmPasswordError && confirmPassword.length>10?"red":null, width:"300px"}} type="password" className="form-control" id="pwd2" value={confirmPassword} onChange={confirmPasswordHandler} />
          {confirmPassword ? <p style={{color:"red"}}>{confirmPasswordError}</p>: null }
        </div>


        <br></br>
        {
          userNameError || passwordError || confirmPasswordError ? null: <button type="submit" className="btn btn-primary">Submit</button>
        }
        
      </form>
      </div>
      </center>
    </>
  );
};

export default ControlledTask;