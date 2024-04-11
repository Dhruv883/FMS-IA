package com.example.seatservice;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user/seats")
public class SeatController {

	@Autowired
	private SeatService seatService;

	//available seats
	@GetMapping("/available/{movieId}")
	public List<Seat> getAvailableSeats(@PathVariable String movieId){
		return seatService.getAvailableSeats(movieId, movieId);
	}

	@PostMapping("/book/{seatId}")
	public List<Seat> bookSeats(@PathVariable List<String> seatId, @RequestParam String userId){
		return seatService.bookSeats(seatId, userId);
	}
	
}
