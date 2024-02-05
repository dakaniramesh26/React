
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/postLoginScreen/homeScreen'
import SettingScreen from '../screens/postLoginScreen/settingScreen'
import AboutScreen from '../screens/postLoginScreen/aboutScreen'
import ProductScreen from '../screens/postLoginScreen/productScreen'
import ProductDetails from '../screens/postLoginScreen/poroductDetails'
import InvalidScreen from '../screens/invalidScreen'


function PostLogin() {
  return (
    <Routes>


<Route path="/" Component={HomeScreen}    />
    <Route path="/settings" Component={SettingScreen}    />
    <Route path="/about" Component={AboutScreen}    />
    <Route path="/investor-relations" Component={ProductScreen}    />

    

    <Route path="/productlistview/:id" Component={ProductDetails}/>
    <Route path="*" Component={InvalidScreen}    />
    </Routes>
  
  )
}

export default PostLogin


// tasks :
// 0. Repeat the class (context api , global state management)
// 1. Add employee route , add employees and show in other routing page 
// 3. Product count in home screen , also show total amount 