package com.example.demo.DTO;

import com.example.demo.model.Lend;

public record BookDTO(Long id, String title, String author, String image, String summery, int pageCount,String categoryName) {
}
