
import { useContext } from "react"
import NavBar from "../../components/navbar/navbar"
import { DataShare } from "../../navigationStack/navigation"
import UseReducerEx from "../../components/hooks/usereducer/usereducer"
import Parent from "../../components/reactMemo/parent"

const AboutScreen =()=>{
  const data=useContext(DataShare)
  const {name,darkTheme}=data
 
    return(
        <>
        <NavBar/>
        <Parent/>
        <UseReducerEx/>
        {/* <div style={{width:100, height:100,backgroundColor:darkTheme?"black":"red"}}></div> */}
      
      {/* <FormComponent/>
        <FooterComponent/> */}
        <h1>I am from aboutScreen</h1>
        <h1>I managed globally{name}</h1>
       
        </>
    )
}
export default AboutScreen