package com.example.movieservice;

import java.util.List;

// import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Document(collection = "movies")
public class Movie {
	
	@Id
	private String id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private List<String> genres;
    private String poster;
	
}
