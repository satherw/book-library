package com.satherw.booklibrary;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.boot.test.autoconfigure.web.servlet.MockMvcPrint.NONE;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@AutoConfigureMockMvc(print = NONE)
@SpringBootTest()
@ActiveProfiles("test")
class ApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void getAllBooks() throws Exception {
        // Given: two books exist in the database
        mockMvc.perform(get("/books")).andExpect(MockMvcResultMatchers.jsonPath("*", hasSize(2)));

        // When: a third book is added to the database
        mockMvc.perform(post("/books").header("content-type", "application/json").content("""
                {
                        "name": "Refactoring (Second Edition)",
                        "author": "Martin Fowler"
                }
                """)).andExpect(MockMvcResultMatchers.status().is2xxSuccessful());

        // Then: three books exist in the database
        mockMvc.perform(get("/books")).andExpect(MockMvcResultMatchers.jsonPath("*", hasSize(3)));
    }
}
