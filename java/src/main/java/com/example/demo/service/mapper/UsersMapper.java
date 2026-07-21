package com.example.demo.service.mapper;

import com.example.demo.DTO.BookDTO;
import com.example.demo.DTO.UsersDTO;
import com.example.demo.model.Book;
import com.example.demo.model.Users;
import org.apache.catalina.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


import java.util.List;
    @Mapper(componentModel = "spring")
    public interface UsersMapper {

        UsersDTO toDTO(Users u);
        Users toUsers(UsersDTO dto);
        List<UsersDTO> toDTO(List<Users> users);
    }



