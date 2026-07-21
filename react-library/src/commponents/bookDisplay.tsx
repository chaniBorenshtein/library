import { useEffect, useState,useContext } from 'react'
import {type Book} from '../model/books'
import { type comment } from '../model/comment'
import {type lend}from '../model/lend'
import {type user}from '../model/users'
import { getBooks,getCommentById } from '../serviice/book'
import { UserContext } from '../Context/userContext'
import {CreateLend}from '../serviice/lend'
import { Stack } from '@mui/material'
import Books from './Books'
const BookDisplay=()=>{
    const{user}=useContext(UserContext)
    const [books, setBooks] =useState<Book[]>([])
    const [comment,setComment]=useState<comment[]>([])
      const [showComment, setShowComment] = useState<number>(-1)
      const [lend,setlend]=useState<lend>()
    useEffect(()=>{
       const myFunc=async()=>{
            const res=await getBooks()
            setBooks(res.data)
        }
        myFunc()
    },[])

    // const getComment = async(id:number)=>{
    //     try{
    //     const res= await getCommentById(id)
    //     setComment(res.data)
    //     console.log(res.data)
    //     console.log("good")
    //     }
    //     catch{
    //         console.log("error")
    //     }
    // }
    // const deleteBookById=(BookId:number)=>{
    //     deleteBook(BookId)
    //     const res=books.filter(x=>x.id!=BookId)
    //     setBooks(res)
    // }

//    </> )}
//    </> 

        



        
//     </>
// const CreateLend=async(data:object)=>{
//     const res=await CreateLend(data)
//      setlend(res?.data)
//     !statusLend&&alert("ספר זה בשימוש")
//      books.statusLend=false
        
// }
// const CreateLend=async(book:Book)=>{
//     const data={lendingDate:new Date(),user:user,book:book}
//     const res=await CreateLend(data.book)
//     // setUser(res.data)
//     setlend(res?.data)
//     // // alert("ספר זה בשימוש")
//     //  books.statusLend=false
    
        
// }
// const CreateLend=async()=>{
//     const data={user:user,Book:books}
//     const res=await CreateLend(data)
//     // setUser(res.data)
//      setlend(res?.data)}
    // alert("ספר זה בשימוש")
    //  books.statusLend=false}




    // ghgffhdf
//     const CreateLend1=async(book:Book)=>{
//     const data={lendingDate:new Date(),user,book:book}
//     const res=await CreateLend(data)
//     setlend(res?.data)
//     console.log(data)
//     // // alert("ספר זה בשימוש")
//     //  books.statusLend=false
    
        
// }
        



 return <>
        <h1>!!!!כל הספרים </h1>
        <Stack direction={'row'} flexWrap={'wrap'} gap={2}>
        {books.map(x => <>
        <Books book={x}/>
        </>)}
        
        </Stack>
    </>
    {/* <button onClick={(x)=>getCommentById(x.id)}>הצג תגובות</button> */}
    {/* <button>הוסף תגובה</button> */}
    {/* <button onClick={()=>{x.comments.map(y=><p>{y.content}</p>)}}>הצג תגובות</button> */}
   {/* <button onClick={()=>CreateLend1(x)}>השאלה</button> */}

        {/* {user?.status&&<button onClick={()=>prompt("האם אתה בטוח שברצונך למחוק ספר זה לצמיתות???")&&deleteThisBook(x.id)}>X</button>}
        {x.id==id&&comment.map(y=><p>{y.content}</p>)} */}
    {/* </>)} */}
     
    
  
        }
export default BookDisplay