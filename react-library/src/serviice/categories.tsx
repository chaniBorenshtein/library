import axios from "axios"
import {p1} from"../config"
export const getcategory=async()=>{
    const res=await axios.get(`${p1}/Category/getCategory`)
    return res
}