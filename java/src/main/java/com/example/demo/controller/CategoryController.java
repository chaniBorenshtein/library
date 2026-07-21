package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.service.repositories.CategoryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Category")
@CrossOrigin
public class CategoryController {
    private CategoryRepository categoryRepository;
    public CategoryController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/getCategory")
    public ResponseEntity<List<Category>> getCategory(){
        try{
            return new ResponseEntity<>(categoryRepository.findAll(), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/getCategoryById/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable long id){
        try{
            Category c = categoryRepository.findById(id).orElse(null);
            if(c==null){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/CreateCategory")
    public ResponseEntity<Category> CreateCategory(@RequestBody Category c){
        try{
            Category newCategory = categoryRepository.save(c);
            return new ResponseEntity<>(newCategory, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/updateCategory/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable long id,@RequestBody Category c) {
        try {
            Category c1 = categoryRepository.findById(id).orElse(null);
            if (c1 == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            c1.setColor(c.getColor());
            c1.setDescription(c.getDescription());
            c1.setBooks(c.getBooks());
            c1.setName(c.getName());

            categoryRepository.save(c1);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/deleteCategory/{id}")
    public ResponseEntity deleteCategory(@PathVariable long id){
        try{
            categoryRepository.deleteById( id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
