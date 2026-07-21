import axios from "axios"
import {  p1, p2 } from "../config"
import type { Book } from "../model/books"

export const getBooks = async () => {
    const res = await axios.get(`${p1}/book/getBooks`)
    return res
}
export const getCommentById = async (bookId:number) => {
    const res = await axios.get(`${p2}/comment/getCommentsbyBookId/${bookId}`)    
    return res
}
   export const createBook=async(data:Object)=>{
    try{
        console.log("!!!!!!!!!!!!!")
        const res=await axios.post(`${p2}/book/CreateBook`,data)
        return res;
    }
    catch(e){
        console.log("??????????????????")
        console.log(e);
    }
    
}

   export const deleteBook = async (bookId:number) => {
        try {
            await axios.delete(`${p2}/book/delete/${bookId}`);
        }
        catch(e) {
            console.log(e);
         }
    }