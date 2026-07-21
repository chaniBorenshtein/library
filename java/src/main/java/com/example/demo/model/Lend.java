package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import java.time.LocalDate;

@Entity
public class Lend {
    @Id
    @GeneratedValue
    private Long id;

    private LocalDate lendingDate;
    private LocalDate returnDate;
    @ManyToOne
    private Book book;
    @ManyToOne
    private Users user;
    @JsonCreator
    public Lend() {
    }

    public Lend(Long id, LocalDate lendingDate, LocalDate returnDate) {
        this.id = id;
        this.lendingDate = lendingDate;
        this.returnDate = returnDate;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getLendingDate() {
        return lendingDate;
    }

    public void setLendingDate(LocalDate lendingDate) {
        this.lendingDate = lendingDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
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

