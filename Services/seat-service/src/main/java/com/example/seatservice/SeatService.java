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

    //get all available seats of particular movie
	public List<Seat> getAvailableSeats(String movieId, String userId) {
        return seatRepository.findByMovieIdAndIsAvailableAndUserId(movieId, true, userId);
    }

    //get id of seats selected by the user
    public List<Seat> bookSeats(List<String> seatIds, String userId) {
        List<Seat> seatsToBook = seatIds.stream()
                .map(seatId -> seatRepository.findById(new ObjectId(seatId))
                        .orElseThrow(() -> new RuntimeException("Seat not empty: " + seatId)))
                .filter(Seat::isAvailable)
                .peek(seat -> {
                    seat.setAvailable(false);
                    seat.setUserId(userId);
                })
                .collect(Collectors.toList());

        return seatRepository.saveAll(seatsToBook);
    }

}
