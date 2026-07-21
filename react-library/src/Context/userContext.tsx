import { createContext, useState, type ReactNode } from "react";
import type { user } from "../model/users"
//import type { FormValues } from "../components/SignUp"
export interface userContextType{
  user: null | user, setUser: (u: user) => void
};
    export const UserContext=createContext<userContextType>({user:null,setUser:(s:user)=>{}})
    
    const UserProvider=({children}:{children:ReactNode})=>{
        const[user,setUser]=useState<user|null>(null);
        return<UserContext.Provider value={{user,setUser}}>
            {children}</UserContext.Provider>
    };
    export default UserProvider;