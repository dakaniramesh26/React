import reactImage from "./th.jpeg";
const CardCompo = ()=>{
return(
    <div className="card1" style="width: 18rem;">
  <img className="card-img-top1" src={reactImage} alt="Card image cap1"/>
  <div className="card-body1">
    <h5 className="card-title1">Card title</h5>
    <p className="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
)
}
export default CardCompo