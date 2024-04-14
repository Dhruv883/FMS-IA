package com.example.seatservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@RestController
@RequestMapping("/api/seats")
public class SeatController {

    @Autowired
    private SeatService seatService;

    @GetMapping("/available/{movieId}")
    public ResponseEntity<List<Seat>> getAvailableSeats(@PathVariable String movieId) {
        List<Seat> availableSeats = seatService.getAvailableSeatsForMovie(movieId);
        return ResponseEntity.ok(availableSeats);
    }

    @PostMapping("/book")
    public ResponseEntity<List<Seat>> bookSeats(@RequestBody BookSeatsRequest request) {
        List<Seat> bookedSeats = seatService.bookSeats(request.getSeatIds(), request.getUserId(), request.getMovieId());
        return ResponseEntity.ok(bookedSeats);
    }

    @Getter
    @Setter
    public static class BookSeatsRequest {
        private List<String> seatIds;
        private String userId;
        private String movieId;
    }
}

