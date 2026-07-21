package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String author;
    private String image;
    private String summary;
    private int pageCount;
//    private  Boolean statusLend;
    @JsonIgnore
    @ManyToOne
    private Category category;
    @JsonIgnore
    @OneToMany(mappedBy = "book")
    private List<Lend> lendList;
    @JsonIgnore
    @OneToMany(mappedBy = "book")
    private  List<Comment> commentList;

//
//    public Boolean getStatusLend() {
//        return statusLend;
//    }
//
//    public void setStatusLend(Boolean statusLend) {
//        this.statusLend = statusLend;
//    }

    public Book(Category category, String author, Long id, String image, int pageCount, String summary, String title) {
        this.author = author;
//        this.statusLend = true;
        this.id = id;
        this.image = image;
        this.pageCount = pageCount;
        this.summary = summary;
        this.title = title;
        this.category = category;
    }
    @JsonCreator
    public Book() {

    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getPageCount() {
        return pageCount;
    }

    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    public List<Lend> getLendList() {
        return lendList;
    }

    public void setLendList(List<Lend> lendList) {
        this.lendList = lendList;
    }

}