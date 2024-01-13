import FooterComponent from "./footer";
import NavBarComponent from "./navbar";
import ProfileComponent from "./profilecomponent";

const FirstComponent =()=>{
  const profile=[{
            name:"Ram",
            disignation:"Software dev",
            salary:"55k",
            color:"green"
  },
  {
    name:"Riyan",
    disignation:"ui dev",
    salary:"25k",
    color:"blue"
},
{
  name:"Raki",
  disignation:"web dev",
  salary:"35k",
  color:"orange"
},
{
  name:"Ram",
  disignation:"Software dev",
  salary:"55k",
  color:"green"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k",
color:"blue"
},
{
name:"Raki",
disignation:"web dev",
salary:"35k",
color:"orange"
},
{
  name:"Ram",
  disignation:"Software dev",
  salary:"55k",
  color:"green"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k",
color:"blue"
},
{
name:"Raki",
disignation:"web dev",
salary:"35k",
color:"orange"
},
{
  name:"Ram",
  disignation:"Software dev",
  salary:"55k",
  color:"green"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k",
color:"blue"
},
{
name:"Raki",
disignation:"web dev",
salary:"35k",
color:"orange"
},
{
  name:"Ram",
  disignation:"Software dev",
  salary:"55k",
  color:"green"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k",
color:"blue"
},
{
name:"Raki",
disignation:"web dev",
salary:"35k",
color:"orange"
}]
    return(
        <>
      <NavBarComponent/>

        {/* these are cards */}
        <div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4" style={{display:"grid", gridTemplateColumns:"100% 100% 100%", gap:"10px"}}> 
    {profile.map((profile)=><ProfileComponent details={profile}/>)} 




{/* 
     <ProfileComponent  details={profile[0]}/>
    </div>
    <div class="col-sm-4">
    <ProfileComponent details={profile[1]} />
    </div>
    <div class="col-sm-4">
    <ProfileComponent details={profile[2]} /> */}
    </div><br/><br/> 
  {/* its Footer */}
<FooterComponent/>
  </div>
</div>
        </>
    )
}
export default FirstComponent;