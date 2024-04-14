package com.example.seatservice;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.example.movieservice.*;
import com.example.user_service.User;

import java.util.List;
import java.util.Objects;

@Service
public class SeatService {

    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private DiscoveryClient discoveryClient;

    private final RestTemplate restTemplate;

    public SeatService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Seat> getAvailableSeatsForMovie(String movieId) {
        // Fetch available seats for the given movieId
        List<Seat> availableSeats = seatRepository.findByMovieIdAndIsAvailable(new ObjectId(movieId), true);
        return availableSeats;
    }

    public List<Seat> bookSeats(List<String> seatIds, String userId, String movieId) {
        // Fetch movieId from movie-service
        String movieID = getMovieId(movieId);

        // Fetch userId from userService
        String userID = getUserId(userId);

        // Fetch seats by their IDs
        List<Seat> seatsToBook = seatRepository.findByIdInAndIsAvailable(seatIds, true);

        // Check if all selected seats are available
        if (seatsToBook.size() != seatIds.size()) {
            throw new RuntimeException("One or more selected seats are not available");
        }

        ObjectId movieIdObject = new ObjectId(movieId);

        // Update seat information
        for (Seat seat : seatsToBook) {
            seat.setAvailable(false);
            seat.setUserId(userId);
            seat.setMovieId(movieIdObject);
        }

        // Save the updated seats
        return seatRepository.saveAll(seatsToBook);
    }


    private String getMovieId(String movieId) {
        // Discover movie-service instances
        List<ServiceInstance> instances = discoveryClient.getInstances("movie-service");
        if (instances.isEmpty()) {
            throw new RuntimeException("No instances of movie-service found");
        }

        // Choose a random instance (you can implement load balancing logic here)
        ServiceInstance movieServiceInstance = instances.get(0);

        // Prepare the URL for fetching movie details
        String movieServiceUrl = movieServiceInstance.getUri().toString();
        String movieEndpoint = movieServiceUrl + "/movies/" + movieId;

        // Make the HTTP request to fetch movie details
        ResponseEntity<Movie> responseEntity = restTemplate.getForEntity(movieEndpoint, Movie.class);

        // Check if the request was successful
        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            Movie movie = responseEntity.getBody();
            return Objects.requireNonNull(movie).getTitle();
        } else {
            throw new RuntimeException("Failed to fetch movie details");
        }
    }

    private String getUserId(String userId) {
        // Discover user-service instances
        List<ServiceInstance> instances = discoveryClient.getInstances("user-service");
        if (instances.isEmpty()) {
            throw new RuntimeException("No instances of user-service found");
        }

        // Choose a random instance (you can implement load balancing logic here)
        ServiceInstance userServiceInstance = instances.get(0);

        // Prepare the URL for fetching user details
        String userServiceUrl = userServiceInstance.getUri().toString();
        String userEndpoint = userServiceUrl + "/users/" + userId;

        // Make the HTTP request to fetch user details
        ResponseEntity<User> responseEntity = restTemplate.getForEntity(userEndpoint, User.class);

        // Check if the request was successful
        if (responseEntity.getStatusCode().is2xxSuccessful()) {
            User user = responseEntity.getBody();
            return Objects.requireNonNull(user).getUsername();
        } else {
            throw new RuntimeException("Failed to fetch user details");
        }
    }
}
