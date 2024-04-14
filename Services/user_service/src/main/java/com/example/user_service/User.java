package com.example.user_service;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
      @Id
      private ObjectId id;
      private String fname;
      private String lname;
      private String email;
      private String phone;
      private String password;

      public String getFname() {
            return fname;
      }

      public void setFname(String fname) {
            this.fname = fname;
      }

      public String getLname() {
            return lname;
      }

      public void setLname(String lname) {
            this.lname = lname;
      }

      public String getEmail() {
            return email;
      }

      public void setEmail(String email) {
            this.email = email;
      }

      public String getPhone() {
            return phone;
      }

      public void setPhone(String phone) {
            this.phone = phone;
      }

      public String getPassword() {
            return password;
      }

      public void setPassword(String password) {
            this.password = password;
      }

	public String getUsername() {
		// TODO Auto-generated method stub
		throw new UnsupportedOperationException("Unimplemented method 'getUsername'");
	}

}
