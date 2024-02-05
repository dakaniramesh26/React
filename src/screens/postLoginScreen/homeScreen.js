
import { useContext, useEffect, useState } from "react"

import NavBar from "../../components/navbar/navbar"
import axios from "axios"
import { Link } from "react-router-dom"
import { DataShare } from "../../navigationStack/navigation"



const HomeScreen=()=>{
    const[ProductsListing,setProductListing]=useState([])
    const[totalPrize,setTotalPrize]=useState(null)
    const {darkTheme,changeTheme}=useContext(DataShare)
    useEffect(()=>{
        fetchData()
        console.log("component did update")
        },[])
        
        const fetchData=()=>{
            axios.get("https://fakestoreapi.com/products")
            .then(response=>{
                if(response.status===200){
                    //Successfully data came
                    const newResponse=response.data.map(eachObj=>{
                        return{...eachObj, count:1, total:eachObj.price}
                    })
                    // debugger
                    setProductListing(newResponse)
                    const result=sumOfPrize(response.data)
                    setTotalPrize(result)
                }
            })
        }

        //this function is for calculating sum of prize
        const sumOfPrize=(arrayObject)=>{
            const result=arrayObject.reduce((initial,eachObject)=>initial+eachObject.price,0)
            return result;
        }



        const handleIncrement=(data)=>{
        console.log(data);
        console.log(ProductsListing);
        }


        const controlTheme=()=>{
           changeTheme()
        }
    return(
        <>
        <NavBar/>
        <div style={{width:100, height:100,backgroundColor:darkTheme?"black":"red"}}></div>
        <button onClick={controlTheme}>ChangeTheme</button>
        <h1>i am from homeScreen</h1>
        <h2>Total value of project: {"₹ "+totalPrize+" Rs"}</h2>
        
        {
            ProductsListing.length>0 ? ProductsListing.map(product=><ProductListingComponent key={product.id} data={product} handleIncrement={handleIncrement} />)
            :<h1>loading...</h1>
        }
        </>
    )
}
export default HomeScreen

export const ProductListingComponent=({data,handleIncrement})=>{
    return(
        <>
       
            {/* <img src={val.image}></img> */}
        <h3>{data.title}</h3>
        <img src={data.image} alt={data.category} height={100} width={100}/><br/><br/>
        <h5>{data.count}</h5>
        <button onClick={()=>handleIncrement(data)}>increment</button>
        <button >decrement</button><br/><br/>
        <h3>{"₹ "+data.price+" Rs"}</h3>
        <Link to={`/hyderabad/${data.id}`}>
     
        <button >click to more details</button>
       {/* <h3>{data.price}</h3> */}
        </Link>
        
        </>
    )
}