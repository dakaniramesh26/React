import { BrowserRouter} from "react-router-dom"
import { createContext, useState } from "react"
import PostLogin from "./postLoginRoutes"
import PreLogin from "./preLoginRoutes"




 
export const DataShare = createContext()

const NavigationStack =()=>{


    const[name,setName]=useState("10kCoders")
    const [darkTheme,setDarkTheme]=useState(false)
    const [login,setLogin]=useState(false)

     const changeTheme=()=>{
        // debugger
        setDarkTheme(!darkTheme)
     }

     const loginTrue=()=>{
        setLogin(true)
     }


    return(
        <DataShare.Provider value={{name,darkTheme,changeTheme,loginTrue}}  >

        <BrowserRouter>

      {
        true?<PostLogin/>:<PreLogin/>

      }
           



        </BrowserRouter>

        </DataShare.Provider>




    )
}

export default NavigationStack


// steps :
// 1. Create a component 
// 2. Use BrowserRouter
// 2. Use Routes as a children prop to the BrowserRouter


// post login : 


// 1. Home 
// 2. Products 
// 3. Settings 
// 4. About 



// unprotected routes --> user can able to switch without login by simply changing url 
// protected routes --> user must authenicate to navigate the main screens 

// static routes 

// dynamic routes 


// Dynamic routing or id routing : based on the id we gonna show the screen and content to user 



// tasks:
// 1. Repeat the class 
// 2. Fill the content (home screen(header,footer),about , settings, products(cards aligned in row 3))
// 3. what is authenication and authorisation 

// class :


// mounting : compoent did mount 
// updating pahse : component did update 


// unmounting :component will unmount 
// other react features (life cycle methods )

// use state and useEffect will almost seen in 80% 
// useEffect hook in react 


// useEffect :  it is a hook which causes the side effects in functional based components

// side effects : 1. HTTP REQ , DOM MANIPULATION , TIMERS , SUBSCRIBTIONS, EVENT LISTENERS 


// USE EFFECT IS EQUAL TO 3 METHODS IN CLASS BASED COMPONENTS 
// 1. compoent did mount
// 2. component did update 
// 3. component will unmount 



// import { BrowserRouter} from "react-router-dom"
// import { createContext, useState } from "react"
// import PostLogin from "./postLoginRoutes"
// import PreLogin from "./preLoginRoutes"


// export const DataShare=createContext();
// const NavigationStack =()=>{

//     const[name,setName]=useState("10kcoders");
//     const[darkTheme,setDarkTheme]=useState(false)
//     const[login,setLogin]=useState(false)


//     const changeTheme=()=>{
//       setDarkTheme(!darkTheme)
//     }
// const loginTrue=()=>{
//   setLogin(true)
// }

//     return(
//      <DataShare.Provider value={{name,darkTheme,changeTheme,loginTrue}}>
//          <BrowserRouter>
//        {
//         login
//         ?
//         //<PostLogin/>
//         <PostLogin/>
//         :
//         // <PreLogin/>
//         <PreLogin/>
//        }
       
//        </BrowserRouter>
//      </DataShare.Provider>
      
//     )
// }
// export default NavigationStack