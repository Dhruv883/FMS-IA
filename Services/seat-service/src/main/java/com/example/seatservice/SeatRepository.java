package com.example.seatservice;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface SeatRepository extends MongoRepository<Seat, ObjectId> {
    List<Seat> findByMovieIdAndIsAvailableAndUserId(ObjectId movieObjectId, boolean isAvailable, String userId);
    Optional<Seat> findById(String seatId);
}
