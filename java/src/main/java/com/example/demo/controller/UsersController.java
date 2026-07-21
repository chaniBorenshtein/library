package com.example.demo.controller;

import com.example.demo.DTO.UsersDTO;
import com.example.demo.model.Lend;
import com.example.demo.model.Users;
import com.example.demo.service.mapper.BookMapper;
import com.example.demo.service.mapper.UsersMapper;
import com.example.demo.service.repositories.UsersRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Users")
@CrossOrigin
public class UsersController {
    private final UsersRepository usersRepository;
    private final UsersMapper usersMapper;


    public UsersController(UsersRepository usersRepository, UsersMapper usersMapper) {
        this.usersRepository = usersRepository;

        this.usersMapper = usersMapper;
    }

    @GetMapping("/getUsers")

    public ResponseEntity<List<UsersDTO>> getUsers(){
        try{
            return new ResponseEntity<>((usersMapper.toDTO(usersRepository.findAll())), HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/getUsersById/{id}")
    public ResponseEntity<UsersDTO> getUsersById(@PathVariable long id){
        try{
            Users u = usersRepository.findById(id).orElse(null);
            if(u==null){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(usersMapper.toDTO(u),HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/getUsersBypasswordandByUserName")
    public ResponseEntity<UsersDTO> getUsersBypasswordandByUserName(@RequestBody Users u1){
        try{
            Users u = usersRepository.getUsersByUserNameAndPassword(u1.getUserName(),u1.getPassword());
            if(u==null){
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(usersMapper.toDTO(u),HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @PostMapping("/Createuser")
    public ResponseEntity<UsersDTO> createUsers(@RequestBody Users u){
        try{
            Users newUser=usersRepository.save(u);
            return new ResponseEntity<>(usersMapper.toDTO(newUser),HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/updateUsers/{id}")
    public ResponseEntity<UsersDTO> updateUsers(@PathVariable long id,@RequestBody Lend l) {
        try {
            Users u1 =usersRepository.findById(id).orElse(null);
            if (u1 == null) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            u1.setCommentList(u1.getCommentList());
            u1.setFirstName(u1.getFirstName());
            u1.setLastName(u1.getLastName());
            u1.setLendList(u1.getLendList());
            u1.setMail(u1.getMail());
            u1.setPassword(u1.getPassword());
            u1.setPhoneNumber(u1.getPhoneNumber());
            u1.setTz(u1.getTz());
            u1.setUserName(u1.getUserName());
            u1.setStatus(u1.isStatus());

            usersRepository.save(u1);
            return new ResponseEntity<>(HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/deleteUsers/{id}")
    public ResponseEntity deleteUsers(@PathVariable long id){
        try{
            usersRepository.deleteById( id);
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
