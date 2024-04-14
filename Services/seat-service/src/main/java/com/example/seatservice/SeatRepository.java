package com.example.seatservice;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeatRepository extends MongoRepository<Seat, ObjectId> {
    List<Seat> findByMovieIdAndIsAvailable(ObjectId objectId, boolean isAvailable);

	List<Seat> findByIdInAndIsAvailable(List<String> seatIds, boolean b);
}
