package com.example.user_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api/user")
public class UserController {

      @Autowired
      private UserService userService;

      @GetMapping("/")
      public ResponseEntity<List<User>> getAllUsers() {
            return new ResponseEntity<List<User>>(userService.allUsers(), HttpStatus.OK);
      }

      @PostMapping("/signup")
      public ResponseEntity<User> signup(@RequestParam String fname, @RequestParam String lname,
                  @RequestParam String email, @RequestParam String phone, @RequestParam String password) {

            return new ResponseEntity<User>(userService.createUser(fname, lname, email, password, phone),
                        HttpStatus.CREATED);
      }

}