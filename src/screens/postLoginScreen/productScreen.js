import { useContext } from "react"
import NavBar from "../../components/navbar/navbar"
import { DataShare } from "../../navigationStack/navigation"

const ProductScreen =()=>{
    const{darkTheme}=useContext(DataShare)
    return(
        <>
        <NavBar/>
        <div style={{width:100, height:100,backgroundColor:darkTheme?"black":"red"}}></div>
        <h1>I am from ProductScreen</h1>
        </>
    )
}
export default ProductScreen