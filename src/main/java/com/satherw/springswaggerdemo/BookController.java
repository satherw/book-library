package com.satherw.springswaggerdemo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
public class BookController {
    ArrayList<Book> booksList = new ArrayList<>(Arrays.asList(new Book("Domain-Driven Design", "Eric Evans"), new Book("Extreme Programming Explained", "Kent Beck")));

    @GetMapping(value = "/books")
    public List<Book> getBooks() {
        return this.booksList;
    }

    @GetMapping(value = "/books/{author}")
    public List<Book> getBooks(@PathVariable(name="author") String author) {
        return this.booksList.stream().filter(x -> x.author().contains(author)).toList();
    }

    @PostMapping(value = "/books")
    public String createBook(@RequestBody Book book) {
        this.booksList.add(book);
        return "Book is saved successfully";
    }
}