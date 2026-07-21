
import {type lend} from '../model/lend'
import { useEffect, useState,useContext } from 'react'
import { UserContext } from '../Context/userContext'
import { getLendsByUserId } from '../serviice/lend'
const Lend=()=>{
  // const [booksUser, setBooksUser] =useState<user>()
    const{user}=useContext(UserContext)
    const [lends,setLends]=useState<lend[]>([])
    // const[bookUser,setBookUser]=useState<user>()
//        const id=user?user.id:1
    
    useEffect(()=> {
const func=async()=>{
         const id=user?user.id:1
            const res=await getLendsByUserId(id)
             setLends(res?.data)
         }
      
    func()
    },[])
  //  const func=async()=>{
  //       const id = user?user.id:-1
  //       const res=await getLendsByUserId(id)
  //       setLends(res?.data)
  //       // console.log(res?.data);
        
  //   }
  //           useEffect(() => {
  //               func()
  //           },[])

    
     
 return (
    <>
    <div>ההשאלות שלי</div>
    
      {lends.map(x =>
                <div>{x.book.title} </div> )}
    
                 {/* <button onClick={() => getBooksByUser (x.id)}>הצג הערות</button>
                // */}

        


    
    </>
  )
}
export default Lend