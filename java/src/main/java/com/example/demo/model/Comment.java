package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import java.time.LocalDate;

@Entity
public class Comment {//תגובה
    @Id
    @GeneratedValue
    private Long id;

    private String content;
    private LocalDate date;
    @JsonIgnore
    @ManyToOne
    private Book book;
    @JsonIgnore
    @ManyToOne
    private Users user;
    @JsonCreator
    public Comment() {
    }

    public Comment(String content, LocalDate date, Long id) {
        this.content = content;
        this.date = date;
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }


    //קשר לטבלת משתמשים
    //קשר לטבלת ספרים
}
