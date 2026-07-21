import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, {type IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { Book } from '../model/books';
import { UserContext } from '../Context/userContext';
import { Link, useLocation } from 'react-router-dom';
import type { lend } from '../model/lend';
import {  getCommentById } from '../serviice/book';
import { CreateLend } from '../serviice/lend';
// import image from '../assets/image.png'
import Box from  '@mui/material/Box';

import { useContext,useState } from 'react';
// import Card from '@mui/material';
import type { comment } from '../model/comment';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
type BookProps={
  book:Book
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),

}));

const RecipeReviewCard:React.FC<BookProps>=({book})=>{
 const{user}=useContext(UserContext)
    const [books, setBooks] =useState<Book[]>([])
    const [comment,setComment]=useState<comment[]>([])
      const [showComment, setShowComment] = useState<number>(-1)
      const [lend,setlend]=useState<lend>()
        const {pathname}=useLocation();
         const CreateLend1=async(book:Book)=>{
    const data={lendingDate:new Date(),user,book:book}
    const res=await CreateLend(data)
    setlend(res?.data)
    console.log(data)
    // // alert("ספר זה בשימוש")
    //  books.statusLend=false
 }



  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
         <Card sx={{width:"250px"}}>
      <CardHeader sx={{backgroundImage:`url(${book.image})`,backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
       height: "200px"}}/>
      <CardContent>
        
          

        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          {book.title}
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>           
                         
         {(user?.status&&<button onClick={() => CreateLend1(book)}> להשאלת הספר</button>)} 
   <ExpandMore
          expand={expanded}
           onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
           
          <ExpandMoreIcon />
          
        </ExpandMore>
      </CardActions>
     
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
          שם המחברת: {book.author}
          </Typography>
          <Typography>
            {book.pageCount}:מספר עמודים
          </Typography>
          <Typography>
           תקציר:{book.summary}
          </Typography>
          <Typography>
            
          </Typography>
          
        </CardContent>
      </Collapse>
        
       </Card>
        
    )


}
export default RecipeReviewCard