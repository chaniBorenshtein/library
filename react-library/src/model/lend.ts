import type { JSX } from "react/jsx-dev-runtime"
import type { Book } from "./books";
import type { user } from "./users";
export type lend={
    // map(arg0:(y:any)=>JSX.Element):unknown
    // lendingDate:Date,
    // user:user
    // bookName:string,
    // userName:string
    // book:Book
      lendingDate:Date,
  returnDate:Date,
  id:number,
  book:Book
   
}