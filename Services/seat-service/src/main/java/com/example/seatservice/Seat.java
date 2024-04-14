package com.example.seatservice;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "seats")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Seat {
    @Id
    @Field("id")
    private ObjectId id;
    
    @Field("userId")
    private String userId;
    
    @Field("movieId")
    private ObjectId movieId;
    
    @Field("seatNumber")
    private List<String> seatNumber;
    
    @Field("isAvailable")
    private boolean isAvailable;
}
