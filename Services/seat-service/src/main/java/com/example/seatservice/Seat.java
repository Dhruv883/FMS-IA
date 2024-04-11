package com.example.seatservice;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "seats")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Seat {
    @Id
    private ObjectId seatId;
    private String userId;
    private String movieId;
    private List<String> seatNumber;
	private boolean isAvailable;
}
