import { useState } from "react";
import Childusememo from "./childusememo";
import { hoursToGreeting} from "../../../utills/datahelper";

function Parentusememo() {
  const data = new Date()
  const [greeting, setGreeting] = useState(hoursToGreeting(data.getHours))


 

    

  // const[greeting,setGreetings]=useState(indexDay(data.getDay()));

  

  return (
    <>
      <Childusememo greeting={greeting} />
    </>
  );
}


export default Parentusememo