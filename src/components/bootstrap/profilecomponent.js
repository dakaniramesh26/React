
import reactImage from "./images.jpeg";


const ProfileComponent =(props)=>{
  // console.log(props);
    return(
        <>
    <div className="card" style={{width:"100%"}}>
    <img className="card-img-top" src={reactImage} alt="Card image" style={{width:"100%"}}  />
    <div className="card-body">
      <h4 className="card-title" style={{color:props.color}}>{props.details.name}</h4>
      <h4 className="card-text">{props.details.disignation}</h4>
      <h4 className="card-text">{props.details.salary}</h4>
      <a href="#" className="btn btn-primary">See Profile</a>
    </div>
  </div>
        </>
    )
}
export default ProfileComponent;