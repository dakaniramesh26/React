import ProfileComponent from "./profilecomponent"

const MapMethod=()=>{
const summary=[{
    name:"Ram",
    disignation:"Software dev",
    salary:"55k"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k"
},
{
name:"Ram",
disignation:"Software dev",
salary:"55k"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k"
},
{
name:"Ram",
disignation:"Software dev",
salary:"55k"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k"
},
{
name:"Ram",
disignation:"Software dev",
salary:"55k"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k"
},
{
name:"Ram",
disignation:"Software dev",
salary:"55k"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k"
},
{
name:"Ram",
disignation:"Software dev",
salary:"55k"
},
{
name:"Riyan",
disignation:"ui dev",
salary:"25k"
},
{
name:"Raki",
disignation:"product dev",
salary:"35k"
}]

    return(
        <>
        {summary.map((summary)=><ProfileComponent details={summary}/>)}
        </>

    )
}
export default MapMethod