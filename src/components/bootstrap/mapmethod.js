import ProfileComponent from "./profilecomponent"

const MapMethod=()=>{
const summary=[{
    name:"Ram",
    disignation:"Software dev",
    salary:"55k",
    id:"101"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k",
id:"102"
},
{
name:"Ram",
disignation:"Software dev",
salary:"55k",
id:"103"
}]

    return(
        <>
        {summary.map((summary)=><ProfileComponent details={summary} key={summary.id}/>)}
        </>

    )
}
export default MapMethod