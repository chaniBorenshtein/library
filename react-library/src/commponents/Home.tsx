import Box from "@mui/material/Box"
import image from "../assets/library-7.jpg"

const Home=()=>{
    return(
    
    <Box sx={{
        backgroundImage:`url(${image})`,
        height:"800px",
        width:"1845px",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        opacity:"1"
    }
        
    }>
    </Box>
    
)
}
export default Home
