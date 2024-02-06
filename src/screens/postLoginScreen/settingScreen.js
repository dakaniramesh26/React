import { useContext } from "react";
import { DataShare } from "../../navigationStack/navigation";
import NavBar from "../../components/navbar/navbar";
import Parent from "../../components/reactMemo/parent";
import Child from "../../components/reactMemo/child";
import Parentusememo from "../../components/hooks/usememo/parentusememo";

const SettingScreen=()=>{
    const{darkTheme}=useContext(DataShare)
    return(
        <>
     <NavBar/>
     {/* <Parent/> */}
     <Parentusememo/>

        {/* <div style={{width:100,height:100,backgroundColor:darkTheme?"black":"red"}}></div>
        <h1>I am from settingScreen</h1> */}
        </>
    )
}
export default SettingScreen

