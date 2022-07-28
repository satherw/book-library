package com.satherw.springswaggerdemo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
public class BookController {

    private BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {

        this.bookRepository = bookRepository;
    }

    @GetMapping(value = "/books")
    public Iterable<Book> getBooks() {
        return this.bookRepository.findAll();
    }

    @GetMapping(value = "/books/{author}")
    public List<Book> getBooks(@PathVariable(name = "author") String author) {
        return Collections.emptyList();
    }

    @PostMapping(value = "/books")
    public void createBook(@RequestBody Book book) {
        this.bookRepository.save(book);
    }
}