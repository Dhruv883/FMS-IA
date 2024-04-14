package com.example.movieservice;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    // Fetch all movies
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    // Fetch a movie by its ID
    public Movie getMovieById(ObjectId id) {
        return movieRepository.findById(id).orElse(null);
    }
}
