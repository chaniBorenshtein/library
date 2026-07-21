package com.example.demo.service.mapper;

import com.example.demo.DTO.CategoryDTO;
import com.example.demo.model.Category;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    CategoryDTO toDTO(Category category);
    Category toBook(CategoryDTO categoryDTO);
}
