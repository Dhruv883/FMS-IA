package com.example.seatservice;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/seats")
public class SeatController {

	@Autowired
	private SeatService seatService;

	//available seats
	@GetMapping("/available/{movieId}")
    public List<Seat> getAvailableSeats(@PathVariable String movieId){
        return seatService.getAvailableSeats(movieId, ""); 
    }

	@PostMapping("/book/{seatId}")
	public List<Seat> bookSeats(@RequestBody List<String> seatId, @RequestParam String userId){
		return seatService.bookSeats(seatId, userId);
	}
	
}

// package com.example.seatservice;

// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.web.bind.annotation.RestController;

// import java.util.Arrays;
// import java.util.List;

// @RestController
// @RequestMapping("api/seats")
// public class SeatController {

//     // Static data for testing
//     private static final List<Seat> STATIC_SEATS = Arrays.asList(
//             new Seat(new ObjectId(), "", "1", Arrays.asList("1A", "1B"), true),
//             new Seat(new ObjectId(), "", "1", Arrays.asList("1C", "1D"), true),
//             new Seat(new ObjectId(), "", "1", Arrays.asList("1E", "1F"), false) // Assuming this seat is booked
//     );

//     //available seats
//     @GetMapping("/available/{movieId}")
//     public List<Seat> getAvailableSeats(@PathVariable String movieId) {
//         // For simplicity, return all static seats as available
//         return STATIC_SEATS;
//     }

//     @PostMapping("/book/{seatId}")
//     public List<Seat> bookSeats(@RequestBody List<String> seatId, @RequestParam String userId) {
//         // Simulate booking by marking the first seat as booked
//         STATIC_SEATS.get(0).setAvailable(false);
//         STATIC_SEATS.get(0).setUserId(userId);
//         return STATIC_SEATS;
//     }
// }

