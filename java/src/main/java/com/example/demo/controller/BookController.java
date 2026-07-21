package com.example.demo.controller;

import com.example.demo.DTO.BookDTO;
import com.example.demo.model.Book;
import com.example.demo.model.Comment;
import com.example.demo.service.mapper.BookMapper;
import com.example.demo.service.repositories.BookRepository;
import com.example.demo.service.repositories.CommentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/book")
@CrossOrigin
public class BookController  {
    private final BookRepository bookRepository ;
    private final BookMapper bookMapper;
    private final CommentRepository commentRepository;

    public BookController(BookRepository bookRepository, BookMapper bookMapper, CommentRepository commentRepository) {
        this.bookRepository = bookRepository;
        this.bookMapper = bookMapper;
        this.commentRepository = commentRepository;
    }
    @GetMapping("/getBooks")
    public ResponseEntity<List<BookDTO>> getBooks(){
        try{
            return new ResponseEntity<>( bookMapper.toDTO(bookRepository.findAll()), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/getBookById/{id}")
    public ResponseEntity<BookDTO> getBookById(@PathVariable long id){
        try{
            Book b = bookRepository.findById(id).orElse(null);
            if(b==null){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>( bookMapper.toDTO(b),HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/getCommentByBook/{bookId}")
    public ResponseEntity<List<Comment>> getCommentByBookId(@PathVariable Long bookId){
        try{
            List<Comment> c=commentRepository.findCommentsByBookId(bookId);
            if(c==null)
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/CreateBook")
    public ResponseEntity<BookDTO> createBook(@RequestBody Book b) {
        try{
            Book newBook=bookRepository.save(b);
            return new ResponseEntity<>(bookMapper.toDTO(newBook), HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }


    }

    @PutMapping("/updateBook/{id}")
    public ResponseEntity<BookDTO> updateBook(@PathVariable long id,@RequestBody Book b) {
        try {
            Book b1 = bookRepository.findById(id).orElse(null);
            if (b1 == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            b1.setAuthor(b.getAuthor());
            b1.setCategory(b.getCategory());
            b1.setCommentList(b.getCommentList());
            b1.setImage(b.getImage());
            b1.setLendList(b.getLendList());
            b1.setPageCount(b.getPageCount());
            b1.setSummary(b.getSummary());
            b1.setTitle(b.getTitle());
            bookRepository.save(b1);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
}
    @DeleteMapping("/deleteBook/{id}")
    public ResponseEntity<BookDTO> deleteBook(@PathVariable long id) {
        try{
            bookRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/BooksByTitel/{titel}")
    public ResponseEntity<List<Book>> getBookByTitel(@PathVariable String title) {
        try {
            List<Book> b = bookRepository.findBooksByTitleContains(title);

            return new ResponseEntity<>(b, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>((HttpStatus.INTERNAL_SERVER_ERROR));
        }
    }
}
