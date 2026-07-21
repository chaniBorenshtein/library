package com.example.demo.controller;

import com.example.demo.DTO.LendDTO;
import com.example.demo.model.Lend;
import com.example.demo.service.mapper.LendMapper;
import com.example.demo.service.repositories.LendRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/Lend")
@CrossOrigin
public class LendController {
    private LendRepository lendRepository;
private  LendMapper lendMapper;
    public LendController(LendRepository lendRepository,LendMapper lendMapper) {
        this.lendRepository = lendRepository;
        this.lendMapper = lendMapper;
    }
//    @GetMapping("/getLend")
//
//    public ResponseEntity<List<Lend>> getLend(){
//        try{
//            return new ResponseEntity<>(lendRepository.findAll(), HttpStatus.OK);
//        }
//        catch (Exception e){
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
    @GetMapping("/getLend")
    public ResponseEntity<List<LendDTO>> getLend(){
        try{

            return new ResponseEntity<>(lendMapper.lendDTO(lendRepository.findAll()), HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR );
        }
    }
    @GetMapping("/getLends")
    public List<Lend> getLends(){
        return lendRepository.findAll();
    }
//    @GetMapping("/getLends2")
//    public ResponseEntity<List<Lend>> getLends2(){
//        try{
//            return new ResponseEntity<>(lendRepository.findAll(), HttpStatus.OK);
//        }
//        catch (Exception e){
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
    @GetMapping("/getLendById/{id}")
    public ResponseEntity<LendDTO> getLendById(@PathVariable long id){
        try{
            Lend l = lendRepository.findById(id).orElse(null);
            if(l==null){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(lendMapper.toDTO(l),HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/CreateLend")
    public ResponseEntity<LendDTO> CreateLend(@RequestBody Lend l){

        try{
            Lend newLend = lendRepository.save(l);
            return new ResponseEntity<>(lendMapper.toDTO(newLend), HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/updateLend/{id}")
    public ResponseEntity<Lend> updateLend(@PathVariable long id,@RequestBody Lend l) {
        try {
            Lend l1 =lendRepository.findById(id).orElse(null);
            if (l1 == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            l1.setBook(l.getBook());
            l1.setReturnDate(l.getReturnDate());
            l1.setLendingDate(l.getLendingDate());
            l1.setUser(l.getUser());

            lendRepository.save(l1);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/deleteLend/{id}")
    public ResponseEntity deleteLend(@PathVariable long id){
        try{
            lendRepository.deleteById( id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
//    @GetMapping("/getLendsByUserId/{userId}")
//    public ResponseEntity<LendDTO> getLendsByUserId(@PathVariable Long userId){
//        try{
//            Lend l=lendRepository.findById(userId).orElse(null);;
//            if(l==null)
//                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//            return new ResponseEntity<>(lendMapper.toDTO(l),HttpStatus.OK);
//        }
//        catch (Exception e){
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }

//    @GetMapping("/getLendsByUserId/{userId}")
//    public ResponseEntity<List<Lend>> getLendsByUserId(@PathVariable Long userId){
//        try{
//             List<Lend> l=lendRepository.findLendsByUserId(userId);;
//            if(l==null)
//                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//            return new ResponseEntity<>(l,HttpStatus.OK);
//        }
//        catch (Exception e){
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
    @GetMapping("/getLendsByUserId/{userId}")
    public ResponseEntity<List<Lend>> getLendsByUserId(@PathVariable Long userId){
        try{
            List<Lend> l=lendRepository.findLendsByUserId(userId);
            if(l==null)
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(l,HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

