package com.example.user_service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
      @Autowired
      private UserRepository userRepository;

      public List<User> allUsers() {
            return userRepository.findAll();
      }

      public User createUser(String fname, String lname, String email, String phone, String password) {
            User user = new User();
            user.setFname(fname);
            user.setLname(lname);
            user.setEmail(email);
            user.setPhone(phone);
            user.setPassword(password);
            return userRepository.save(user);
      }

      public User loginUser(String email, String password) {
            User user = userRepository.findByEmail(email);
            if (user == null) {
                  return null;
            }

            return user;

      }

}
