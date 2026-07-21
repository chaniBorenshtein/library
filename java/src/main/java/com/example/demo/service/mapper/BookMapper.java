package com.example.demo.service.mapper;

import com.example.demo.DTO.BookDTO;
import com.example.demo.model.Book;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel="spring")
public interface BookMapper {
    @Mapping(source="category.name",target="categoryName")
    BookDTO toDTO(Book book);

    Book toBook(BookDTO bookDTO);

    List<BookDTO> toDTO(List<Book> books);
}
