package com.example.seatservice;

import java.util.List;
import java.util.stream.Collectors;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatService {

    @Autowired
    private SeatRepository seatRepository;

    // Get all available seats of a particular movie
    public List<Seat> getAvailableSeatsForMovie(String movieId, String userId) {
        // Convert the movieId String to ObjectId
        ObjectId movieObjectId = new ObjectId(movieId);
        return seatRepository.findByMovieIdAndIsAvailableAndUserId(movieObjectId, true, userId);
    }

    // Book seats selected by the user
    public List<Seat> bookSeats(List<String> seatIds, String userId, ObjectId movieObjectId2) {
        // Convert the movieId String to ObjectId
        ObjectId movieObjectId = new ObjectId();
        
        List<Seat> seatsToBook = seatIds.stream()
                .map(seatId -> seatRepository.findById(seatId)
                        .orElseThrow(() -> new RuntimeException("Seat not found: " + seatId)))
                .filter(Seat::isAvailable)
                .peek(seat -> {
                    seat.setAvailable(false);
                    seat.setUserId(userId);
                    seat.setMovieId(movieObjectId); // Set the ObjectId of the movieId
                })
                .collect(Collectors.toList());

        return seatRepository.saveAll(seatsToBook);
    }
}
