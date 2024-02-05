import axios from "axios"
import { useEffect, useState } from "react"

const UseEffectEx1=()=>{

    const[ProductsListing,setProductListing]=useState([])
    useEffect(()=>{
        fetchData()
        console.log("component did update")
        },[])
        
        const fetchData=()=>{
            axios.get("https://fakestoreapi.com/products")
            .then(response=>{
                if(response.status===200){
                    //Successfully data came
                    setProductListing(response.data)
                }
            })
        }
    return(
        <>
        <h1>i am from Useefectexamples1</h1>

        {/* {
            ProductsListing.length>0 ? ProductsListing.map(product=><ProductListing key={product.id} data={product}  />)
            :<h1>loading...</h1>
        } */}
        </>
    )
}
export default UseEffectEx1


