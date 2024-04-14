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

    // Add a new movie
    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    // Update an existing movie
    public Movie updateMovie(ObjectId id, Movie movieDetails) {
        Movie movie = getMovieById(id);
        if (movie == null) {
            throw new RuntimeException("Movie not found: " + id);
        }
        movie.setTitle(movieDetails.getTitle());
        movie.setReleaseDate(movieDetails.getReleaseDate());
        movie.setGenres(movieDetails.getGenres());
        movie.setPoster(movieDetails.getPoster());
        return movieRepository.save(movie);
    }

    // Delete a movie by its ID
    public void deleteMovie(ObjectId id) {
        movieRepository.deleteById(id);
    }
}
