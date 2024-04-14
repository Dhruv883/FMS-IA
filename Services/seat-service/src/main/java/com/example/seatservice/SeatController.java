package com.example.seatservice;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpMethod;

import com.example.movieservice.Movie;

import lombok.Getter;
import lombok.Setter;

@RestController
@RequestMapping("api/seats")
public class SeatController {

    @Getter
    @Setter
    public class BookSeatsRequest {
        private List<String> seatIds;
        private String userId;
        private String movieId;
    }

    @Autowired
    private SeatService seatService;

    @Autowired
    private RestTemplate restTemplate;

    // available seats
    //tried to recieve data from movie service. added movie service in dependency

    public List<Seat> getAvailableSeats(@PathVariable String movieId) {
        // Call user-service to fetch the userId
        ResponseEntity<String> userResponse = restTemplate.exchange("http://localhost:8080/api/user", HttpMethod.GET, null, String.class);
        String userId = userResponse.getBody();

        // Call movie-service to fetch the movie details
        ResponseEntity<Movie> movieResponse = restTemplate.exchange("http://localhost:8083/api/movies" + movieId, HttpMethod.GET, null, Movie.class);
        Movie movie = movieResponse.getBody();

        
        return seatService.getAvailableSeatsForMovie(movieId, userId);
    }

    @PostMapping("/book") // Add the movieId path variable
    public List<Seat> bookSeats(@RequestBody BookSeatsRequest request) {

        String userId = request.getUserId();
        String movieId = request.getMovieId();
        // Convert the String movieId to ObjectId
        ObjectId movieObjectId = new ObjectId(movieId);

        // Call the SeatService method to book seats
        return seatService.bookSeats(request.getSeatIds(), userId, movieObjectId);
    }

}
