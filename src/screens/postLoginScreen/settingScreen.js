import { useContext } from "react";
import { DataShare } from "../../navigationStack/navigation";
import NavBar from "../../components/navbar/navbar";
const SettingScreen=()=>{
    const{darkTheme}=useContext(DataShare)
    return(
        <>
        <NavBar/>
        <div style={{width:100,height:100,backgroundColor:darkTheme?"black":"red"}}></div>
        <h1>I am from settingScreen</h1>
        </>
    )
}
export default SettingScreen

