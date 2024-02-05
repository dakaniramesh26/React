import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataShare } from "../../navigationStack/navigation"

const NavBar=()=>{

const sharedContext=useContext(DataShare)
console.log(sharedContext);
const{name}=sharedContext

    const link={
        textDecoration:"none",
        color:"red"
    }
    const link2={
        margin:10
    }


    return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item" style={link2}>
  <Link to="/" style={link}>{name}</Link>
      </li>
     <li className="nav-item" style={link2}>
     <Link  to="/about" style={link} >About</Link>

      </li>
      <li className="nav-item" style={link2}>
      <Link to="/setting" style={link}>Setting</Link>
      </li>
      <li className="nav-item" style={link2}>
    <Link to="/product" style={link}>product</Link>
      </li>
    </ul>
  </div>
</nav>

    )
}
export default NavBar