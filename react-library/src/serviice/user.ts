import axios from "axios"
import {  p1, p2 } from "../config"
export const getBooksByUser = async (id:number) => {
     const res = await axios.get(`${p1}/Users/getUsersById/${id}`)
    return res
}
export const createUsers=async(data:Object)=>{
    try{
        console.log("!!!!!!!!!!!!!")
        const res=await axios.post(`${p2}/Users/Createuser`,data)
        return res;
    }
    catch(e){
        console.log("??????????????????")
        console.log(e);
    }
    
}
export const  getUsersBypasswordandByUserName=async(data:object)=>{
    try{
        // console.log("!!!!!!!!!!!!!")
        const res=await axios.post(`${p2}/Users/getUsersBypasswordandByUserName`,data)
        return res;
    }
    catch(e){
        console.log("??????????????????")
        console.log(e);
        // alert("משתמש לא קיים")
    }}
