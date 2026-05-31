package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to Student Management REST API";
    }

    @GetMapping("/student")
    public Student getStudent() {

        Student s = new Student(
                101,
                "Apoorva",
                "B.Tech CSE"
        );

        return s;
    }

    @PostMapping("/student")
    public Student addStudent(
            @RequestBody Student student) {

        return student;
    }
}