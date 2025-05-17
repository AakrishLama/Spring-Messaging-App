package com.MessageServer.Chat.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.MessageServer.Chat.Entities.Room;

public interface RoomRepository extends MongoRepository<Room, String> {

    Room findByRoomId(String roomId);
    
}
