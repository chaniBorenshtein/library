package com.example.demo.DTO;

import java.time.LocalDate;

public record CommentDTO(Long id, String content, LocalDate date) {
}
