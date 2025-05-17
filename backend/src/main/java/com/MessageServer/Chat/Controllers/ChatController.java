package com.MessageServer.Chat.Controllers;

import java.time.LocalDateTime;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import com.MessageServer.Chat.Entities.Message;
import com.MessageServer.Chat.Entities.Room;
import com.MessageServer.Chat.PlayLoad.MessageRequest;
import com.MessageServer.Chat.Repo.RoomRepository;

@Controller
@CrossOrigin("http://localhost:3000")

public class ChatController {
    private RoomRepository roomRepository;

    public ChatController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // for sending and recieving messages
    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public Message SendMessage(
            @DestinationVariable String roomId,
            @RequestBody MessageRequest request

    ) {
        Room room = roomRepository.findByRoomId(request.getRoomId());
        Message message = new Message();
        message.setContent(request.getContent());
        message.setSender(request.getSender());
        message.setTimestamp(LocalDateTime.now());

        if (room != null) {
            room.getMessages().add(message); 
            roomRepository.save(room);
        } else{
            throw new RuntimeException("Room does not exist!");
        }
        return message;

    }

}
