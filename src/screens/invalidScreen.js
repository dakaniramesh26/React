import { useNavigate } from "react-router-dom"

const InvalidScreen =()=>{
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate("/")
    }
    return(
        <>
        <h1>Invalid screen page is not found</h1>
        <button onClick={handleNavigate}>click to login screen</button>
        </>
    )
}
export default InvalidScreen