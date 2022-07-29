package com.satherw.booklibrary;

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
    public Iterable<Book> getBooksByAuthor(@PathVariable(name = "author") String author) {
        return this.bookRepository.findByAuthor(author);
    }

    @GetMapping(value = "/books/{tag}")
    public Iterable<Book> getBooksByTag(@PathVariable(name = "tag") String tag) {
        return this.bookRepository.findByTag(tag);
    }

    @PostMapping(value = "/books")
    public void createBook(@RequestBody Book book) {
        this.bookRepository.save(book);
    }

    @DeleteMapping(value = "/books")
    public void deleteBook(@RequestBody Book book) {
        this.bookRepository.delete(book);
    }
}