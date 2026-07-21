import { createBrowserRouter,Navigate } from 'react-router-dom'
import App from './App'
import Login from './commponents/login'
import BookDisplay from './commponents/bookDisplay'
import SignUp from './commponents/signUp'
import Lend from './commponents/lend'
import AddBook from './commponents/AddBook'
import UserProvider from './Context/userContext'
import Manager from './commponents/Manager'
import {  useContext, type ReactNode } from "react";
import Header from './commponents/Header'
import { UserContext } from './Context/userContext'
import Home from "./commponents/Home";
// import {UserContext}from './Context/userContext'
// import { useContext } from 'react'
const RouteRoles = ({ roles, children }: { roles: boolean[], children: ReactNode }) => {
    const { user } = useContext(UserContext)

    if (!user)
        return <Navigate to="" />
    if (!roles .includes( !user.status))
        return <Navigate to="" />


    return <>{children}</>

}

const Routes=createBrowserRouter([
{

     
        path: "",
        element: <UserProvider><App/></UserProvider>,
        children: [{
            path:"",
            element:<Home />

        },
            {
            path: "Login",
            element: <Login />
        },
        {
            path: "Lend",
            element: <RouteRoles roles={[true,false]}><Lend /></RouteRoles>
        },
        {
            path: "SignUp",
            element: <SignUp />
        },
        {
            path: "BookDisplay",
            element:  <RouteRoles roles={[true,false]}><BookDisplay /></RouteRoles>
            
            
        },
         {
            path: "addBook",
            element: <RouteRoles roles={[true]}> <AddBook /></RouteRoles>
        },
        //   {
        //     path: "manager",
        //     element:  <Manager />,
        //     children:[{
        //         path:"AddBook",
        //         element:<AddBook />}
        
        // ]
        // },
         {
            path: "Home",
            element: <RouteRoles roles={[true]}> <Home /></RouteRoles>
        },
        
       
        
        ]}
    


])
export default Routes
