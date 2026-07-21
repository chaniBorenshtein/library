
import './App.css'
import{Outlet} from 'react-router-dom'
import BookDisplay from './commponents/bookDisplay'
import Header from './commponents/Header'
const App=() =>{
  

  return (
    <>
   
<Header/>
<Outlet/>
    
    </>
  )
}

export default App
