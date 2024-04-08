package com.example.user_service;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api")
public class UserController {

      @GetMapping(path = "/hi")
      public String getAllUsers() {
            // This returns a JSON or XML with the users
            return "Hello";
      }

}