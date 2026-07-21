import {useNavigate} from 'react-router-dom'
import { useContext, useState } from 'react';
// import { userContext } from '../Context/userContext';
import type React from 'react'
import { useForm } from 'react-hook-form'
import type { Book } from '../model/books';
import type { category } from '../model/category';
import { createBook} from '../serviice/book';
import {yupResolver}from '@hookform/resolvers/yup'
import * as yup from "yup"
import axios from "axios"
import { getcategory } from '../serviice/categories';
// import { addUser } from "../server/user"
// import { UserContext } from "../context/userContext"
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export const schema = yup.object({
    
    title: yup.string().required(),
    pageCount: yup.number().required(),
    summary:yup.string().required(),
    category:yup.string().required(),
    image:yup.string().required(),
    author:yup.string().required()
    
    
}).required();
const AddBook:React.FC=()=>{

     const [book,setBook]=useState<Book>();
     const [categires, setCategires] = useState<category[]>([]);
    const nav=useNavigate();
     const {register,handleSubmit,formState:{errors}}=useForm({
      resolver: yupResolver(schema),
      });

    const onSubmit=async(data:Object)=>{
        console.log("הנתונים נשלחו")
        console.log(data);
        const res=await createBook(data);
        // const res2=await getcategory();
        setBook(res?.data)
        // setCategires(res2?.data)
        nav(-1)

    }
     return(
      
        <>
        <h1>הוספת ספר</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

         <Stack gap={2} marginLeft={'30%'} width={'100%'} sx={{width:"1000px",textAlign:"center"}}>
   <TextField
            id="filled-title-input"
            label="title"
            type="title"
            autoComplete="current-title"
            variant="filled"
            {...register ("title",{required:"יש להזין כותרת  " })}
        />

  
   {errors.title&&<p>{errors.title.message}</p>}

      <TextField
            id="filled-author-input"
            label="author"
            type="author"
            autoComplete="current-author"
            variant="filled"
             {...register("author",{required:"יש להזין שם מחבר  " })}
              placeholder='author'
          />
   {errors.author&&<p>{errors.author.message}</p>}
   
          <TextField
            id="filled-image-input"
            label="image"
            // type="image"
            autoComplete="current-image"
            variant="filled"
            {...register("image",{required:"יש להזין תמונה  " })}
             placeholder='image'
          />
   {errors.image&&<p>{errors.image.message}</p>}
<input
          type="string"
          {...register("summary", { required: "יש להזין תקציר  " })}
          placeholder="summery"
        />
        {errors.summary && <p>{errors.summary.message}</p>} 
        
         <TextField
            id="filled-pageCount-input"
            label="pageCount"
            type="pageCount"
            autoComplete="current-pageCount"
            variant="filled"
            {...register("pageCount",{required:"יש להזין מספר דפים  " })}
            placeholder='pageCount'
          />
   {errors.pageCount&&<p>{errors.pageCount.message}</p>}
 <TextField
            id="filled-categoryName-input"
            label="categoryName"
            type="categoryName"
            autoComplete="current-categoryName"
            variant="filled"
             {...register("category",{required:"יש להזין שם קטגוריה  "})}
             placeholder='categoryName'
          />
   {errors.category&&<p>{errors.category.message}</p>}
 
            <Button   type="submit" variant="contained" >
  connect
</Button>
   </Stack>
  
        </form>
        </>
     )
}
export default AddBook