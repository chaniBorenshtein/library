package com.example.demo.service.mapper;

import com.example.demo.DTO.BookDTO;
import com.example.demo.DTO.LendDTO;
import com.example.demo.model.Book;
import com.example.demo.model.Lend;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
@Mapper(componentModel = "spring")
public interface LendMapper {
        @Mapping(source = "user.id",target = "userId")
    @Mapping(source = "book.title",target = "bookName")
    LendDTO toDTO(Lend l);
    List<LendDTO> lendDTO(List<Lend>lendList);
}
