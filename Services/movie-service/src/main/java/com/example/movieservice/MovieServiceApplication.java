package com.example.movieservice;

import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableDiscoveryClient
public class MovieServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(MovieServiceApplication.class, args);
    }

}

