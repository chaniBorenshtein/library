
import { useForm } from "react-hook-form"
import { getUsersBypasswordandByUserName } from "../serviice/user";
import { useContext } from "react";
import { UserContext } from "../Context/userContext";
import { Link, useNavigate } from "react-router-dom";
import type { user } from "../model/users";

interface FormValues{
        userName:String
        password:String
    }
const login:React.FC=()=>{
    const{user,setUser}=useContext(UserContext)
    const nav=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm<FormValues>();
    
    const onSubmit=async(data:FormValues)=>{
       
        const res=await getUsersBypasswordandByUserName(data)
         console.log("הנתונים נשמרו");
        console.log(res)
        setUser(res?.data)
        if(res?.data.userName!=data.userName&&res?.data.password!=data.password)
            nav("/SignUp")
        else
        // {res?.data.userName!=data.userName?alert("משתמש לא קיים"):nav("/Header")}
        // 
        nav(-1)

      
    }
//    const onSubmit=async(data:FormValues)=>{
       
//         const res=await getUsersBypasswordandByUserName(data)
//          console.log("הנתונים נשמרו");
//         console.log(res)
//         setUser(res?.data)
//         {res?.data.userName!=data.userName?alert("משתמש לא קיים"):nav("/SignUp")}

      
//     }
return(<>
<form onSubmit={handleSubmit(onSubmit)}>
    <input
{...register("userName",{required:"יש להזין שם משתמש"})}
placeholder="שם משתמש"
/>
{errors.userName&&<p>{errors.userName.message}</p>}

<input
type="password"
{...register("password",{required:"יש להזין סיסמא"})}
placeholder="סיסמא"
/>
{errors.password&&<p>{errors.password.message}</p>}

<button type="submit">שלח</button>

</form>
</>)
}
export default login