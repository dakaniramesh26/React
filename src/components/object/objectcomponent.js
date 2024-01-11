

export const ObjectComponent= ()=>{
    const details={
        name:"Ramesh",
        age:21,
        college:"mrits",
        imageURL:"https://media.istockphoto.com/id/1467894822/photo/close-up-shot-red-darts-arrows-in-the-target-of-dartboard-center-on-dark-blue-sky-background.webp?b=1&s=170667a&w=0&k=20&c=LPwvDyowjRRgc3Ie6-yFYi__0raI9IZAJFjn92q5Wo0=",
        arr1:["Ram","Riyan","Raki"]
    }
    return(
        <div>
            <h1>{details.name}</h1>
            <h2>{details.age}</h2>
            <h3>{details.college}</h3>
            <img src={details.imageURL}/>
            <ol>
               
                <li>{details.arr1[0]}</li>
                <li>{details.arr1[1]}</li>
                <li>{details.arr1[2]}</li>
            </ol> 
            
        </div>
    )

}
