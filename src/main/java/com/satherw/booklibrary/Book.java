package com.satherw.booklibrary;

import javax.persistence.*;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String author;

    public Book() {}

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAuthor() {
        return author;
    }
}