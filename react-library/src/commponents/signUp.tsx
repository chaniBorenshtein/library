// import {useForm}from "react-hook-form"
// import {yupResolver}from '@hookform/resolvers/yup'
// import * as yup from "yup"
// import axios from "axios"
// import { useContext } from "react";
// import {UserContext} from "../Context/userContext";
// import { addUser } from "../serviice/user";
// import { Await, useNavigate } from "react-router-dom";
// interface userValues{
//     id:number;
//     userName:string;
//      password:string;
//      tz:string;
//     firstName:string;
//      lastName:string;
//      phoneNumber:string;
//      email:string;
//       status:boolean;
// }
// export  const scema=yup.object({
//     id:yup.number().required(),
//     userName:yup.string().required(),
//      password:yup.string().required(),
//      tz:yup.string().required(),
//     firstName:yup.string().required(),
//      lastName:yup.string().required(),
//      phoneNumber:yup.string().required(),
//      email:yup.string().required(),
//       status:yup.boolean().required()
// })

// const SignUp:React.FC=()=>{
 
//   const nav=useNavigate()
//   const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(scema)});
//   const onSubmit=(data:userValues)=>{
//     console.log("the data sends" ,data);
//       addUser(data);
 
  
// };
//   return (
//     <>
//    <form onSubmit={handleSubmit(onSubmit)}>
//     <label>id</label>
//    <input
//    {...register("id",{required:"enter id"})}
//    placeholder='id'
//    />
//    {errors.id&&<p>{errors.id.message}</p>}
//    <label>userName</label>
//    <input
//    {...register("userName",{required:"enter userName"})}
//    placeholder='userName'
//    />
//    {errors.id&&<p>{errors.id.message}</p>}
//     <label>firstName </label>
//    <input
//    {...register("firstName",{required:"enter firstName"})}
//    placeholder='firstName'
//    />
//    {errors.id&&<p>{errors.id.message}</p>}
//    <label>lastName</label>
//    <input
//    {...register("lastName",{required:"enter lastName"})}
//    placeholder='lastName'
//    />
//    {errors.id&&<p>{errors.id.message}</p>}
//      <label>password</label>
//    <input
//    {...register("password",{required:"enter password"})}
//    placeholder='password'
//    />
//    {errors.id&&<p>{errors.id.message}</p>}
//     <label>tz</label>
//    <input
//    {...register("tz",{required:"enter tz"})}
//    placeholder='tz'
//    />
//    {errors.id&&<p>{errors.id.message}</p>}
//     <label>phoneNumber</label>
//    <input
//    {...register("phoneNumber",{required:"enter phoneNumber"})}
//    placeholder='phoneNumber'
//    />
//    {errors.id&&<p>{errors.id.message}</p>}
//     {/* <label>mail</label>
//    <input
//    {...register(" email",{required:"enter mail"})}
//    placeholder=' email'
//    /> */}
//    {errors.id&&<p>{errors.id.message}</p>}
//     <label>status</label>
//    <input
//    {...register("status",{required:"enter status"})}
//    placeholder='status'
//    />
//    {errors.id&&<p>{errors.id.message}</p>}
//    <button type="submit"> שלח</button>
//    </form>
//     </>
//   )
// }

// export default SignUp
import {useForm}from "react-hook-form"
import {yupResolver}from '@hookform/resolvers/yup'
import * as yup from "yup"
import axios from "axios"
import TextField from '@mui/material/TextField';
import { useContext } from "react";
import {UserContext} from "../Context/userContext";
import { createUsers } from "../serviice/user";
import Stack from '@mui/material/Stack';
import { Await, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
// interface FormValues{
//     userName:string,
//     password:string,
//     tz:string,
//     firstName:string,
//     lastName:string,
//     phoneNumber:string,
//     mail:string,
//     status:string
//     }
// const signUp:React.FC=()=>{
//     const {setUser,user}=useContext(UserContext)
//     const {register,handleSubmit,formState:{errors}}=useForm<FormValues>();
//     const nav=useNavigate();
//     const onSubmit=async(data:FormValues)=>{
//         console.log("הנתונים נשלחו")
//         const res=await createUsers(data);
//         console.log(data)
//         setUser(res?.data)
//         nav("/Header")
//     };
const schema=yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  userName: yup.string().required(),
  password: yup.string().max(4).required(),
 tz: yup.string().required(),
 phoneNumber: yup.string().max(10).matches(/[0-9]+/,'is not in correct format').required(),
 mail: yup.string().required(),
status:yup.string().required(),
}) 

const SignUp:React.FC=()=>{
   const{setUser,user}=useContext(UserContext)
    const nav=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({
      resolver: yupResolver(schema),
      });
  const onSubmit=async(data:Object)=>{
        console.log("הנתונים נשלחו")
        console.log(data);
        const res=await createUsers (data);
        setUser(res?.data);
        nav("/Header")
        
    };

return(<>
   <div id="dd"></div>
   <form onSubmit={handleSubmit(onSubmit)}>
    <Stack gap={2} marginLeft={'25%'} width={'200%'} id={"inp"}>
   <TextField
            id="filled-userName-input"
            label="userName"
            type="userName"
            autoComplete="current-userName"
            variant="filled"
            {...register ("userName",{required:"enter userName"})}
            //  aria-describedby="component-error-text"
    //  htmlFor="component-error"
        />

  
   {errors.userName&&<p>{errors.userName.message}</p>}
<TextField
            id="filled-password-input"
            label="password"
            type="password"
            autoComplete="current-password"
            variant="filled"
             {...register("password",{required:"enter password"})}
              placeholder='password'
          />
   {errors.password&&<p>{errors.password.message}</p>}
   <TextField
            id="filled-firstName-input"
            label="firstName"
            type="firstName"
            autoComplete="current-firstName"
            variant="filled"
            {...register("firstName",{required:"enter firstName"})}
          />
   {errors.firstName&&<p>{errors.firstName.message}</p>}

  <TextField
            id="filled-tz-input"
            label="tz"
            type="tz"
            autoComplete="current-tz"
            variant="filled"
            {...register("tz",{required:"enter tz"})}
          />
   {errors.tz&&<p>{errors.tz.message}</p>}
   <TextField
            id="filled-lastName-input"
            label="lastName"
            type="lastName"
            autoComplete="current-lastName"
            variant="filled"
            {...register("lastName",{required:"יש להזין שם משפחה"})}
          />
   {errors.lastName&&<p>{errors.lastName.message}</p>}

 <TextField
            id="filled-phoneNumber-input"
            label="phoneNumber"
            type="phoneNumber"
            autoComplete="current-phoneNumber"
            variant="filled"
             {...register("phoneNumber",{required:"יש להזין טלפון"})}
          />
   {errors.phoneNumber&&<p>{errors.phoneNumber.message}</p>}
   <TextField
            id="filled-mail-input"
            label="mail"
            type="mail"
            autoComplete="current-mail"
            variant="filled"
             {...register("mail",{required:"יש להזין כתובת מייל"})}
          />
   {errors.mail&&<p>{errors.mail.message}</p>}
 <TextField
            id="filled-status-input"
            label="status"
            type="status"
            autoComplete="current-status"
            variant="filled"
            {...register("status",{required:"יש להזין סטטוס"})}
          />
   {errors.status&&<p>{errors.status.message}</p>}
  <Button   type="submit" variant="contained" >
  Send
</Button>
   </Stack>
</form>
</>)
}
export default SignUp


