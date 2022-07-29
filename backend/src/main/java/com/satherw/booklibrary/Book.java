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

    @Column
    private String tag;

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

    public String getTag() {
        return tag;
    }
}