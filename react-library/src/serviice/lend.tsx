import axios from "axios"
import {  p1, p2 } from "../config"
import type { lend } from "../model/lend"

  export const CreateLend=async(data:Object)=>{
   try{console.log("!!!!!!!!!!!!!")
        const res=await axios.post(`${p2}/Lend/CreateLend`,data)
        return res;}
    catch(e){
        alert("תקלה בשרת")
    }    
   
    
}
  export const getLendsByUserId=async(id:number)=>{
  try{
     const res = await axios.get(`${p2}/Lend/getLendsByUserId/${id}`)    
           return res
  }
  catch(e){
    alert("תקלה בשרת")
  }
        
  
    
}
