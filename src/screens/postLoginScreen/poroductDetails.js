import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ProductDetails=()=>{
    const routerInformation = useParams()
    const[productDetails,setProductDetails]=useState({})
    useEffect(()=>{
        fetchEachProduct(routerInformation.id)

    },[routerInformation.id])
    // console.log(routerInformation)
    const fetchEachProduct=(id)=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            
            if(response.status===200){
                setProductDetails(response.data)
            }
            else{
                alert("req failed")
            }
        })
    }


    return(
        <>
        {/* <NavBar/> */}
        {
            Object.keys(productDetails).length>0
            ?
            <>
            <img src={productDetails.image} alt={productDetails.category} width={100} height={100}></img>
            <h1>{productDetails.category}</h1>
            <h3>{productDetails.price }</h3>
            <h5>{productDetails.description}</h5>
            <h5>{}</h5>
            </>
            :
            <h1>Loading...</h1>
        }

        </>
    )
}
export default ProductDetails