package com.example.seatservice;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableDiscoveryClient
public class SeatServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(SeatServiceApplication.class, args);
    }

}
