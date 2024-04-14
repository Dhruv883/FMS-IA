package com.example.user_service;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/")
	public ResponseEntity<List<User>> getAllUsers() {
		return new ResponseEntity<List<User>>(userService.allUsers(), HttpStatus.OK);
	}

	@PostMapping("/signup")
	public ResponseEntity<User> signup(@RequestParam String fname, @RequestParam String lname, @RequestParam String email, @RequestParam String phone, @RequestParam String password) {
		return new ResponseEntity<User>(userService.createUser(fname, lname, email, phone, password), HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestParam String email, @RequestParam String password) {

		User authUser = userService.loginUser(email, password);
		if (authUser == null)
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		return new ResponseEntity<User>(authUser, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<User> userDetails(@PathVariable ObjectId id) {
		User user = userService.getDetails(id);
		if (user == null)
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
}