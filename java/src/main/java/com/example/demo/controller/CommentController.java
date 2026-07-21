package com.example.demo.controller;

import com.example.demo.model.Comment;
import com.example.demo.service.repositories.CommentRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/Comment")
@CrossOrigin
public class CommentController {
    private CommentRepository commentRepository;

    public CommentController(CommentRepository commentRepository) {
       this. commentRepository = commentRepository;
    }

    @GetMapping("/getComment")

    public ResponseEntity<List<Comment>> getComment(){
        try{
            return new ResponseEntity<>(commentRepository.findAll(), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/getCommentById/{bookId}")
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

    @PostMapping("/CreateComment")
    public ResponseEntity<Comment> CreateComment(@RequestBody Comment c){
        try{
            Comment newComment = commentRepository.save(c);
            return new ResponseEntity<>(newComment, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/updateComment/{id}")
    public ResponseEntity<Comment> updateComment(@PathVariable long id,@RequestBody Comment c) {
        try {
            Comment c1 = commentRepository.findById(id).orElse(null);
            if (c1 == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            c1.setContent(c.getContent());
            c1.setBook(c.getBook());
            c1.setDate(c.getDate());
            c1.setUser(c.getUser());

            commentRepository.save(c1);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/deleteComment/{id}")
    public ResponseEntity deleteComment(@PathVariable long id){
        try{
            commentRepository.deleteById( id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
