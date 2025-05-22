import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { createRoom as createRoomAPI, joinChatApi } from "../services/RoomService.jsx"
import useChatContext from '../../context/chatContext.jsx';
import { useNavigate } from 'react-router';


export default function JoinCreateChat() {
    const { roomId, setRoomId, currentUser, setCurrentUser, connected, setConnected } = useChatContext();
    const navigate = useNavigate();
    const [detail, setDetail] = useState({
        roomId: "",
        userName: ""
    });
    function handleFormInputChange(event) {
        setDetail({
            ...detail, [event.target.name]: event.target.value
        })
    }
    async function joinChat() {
        if (!validateForm()) {
            return
        }

        try {
            const room = await joinChatApi(detail.roomId)
            toast.success("joined..")
            setCurrentUser(detail.userName)
            setRoomId(room.roomId)
            setConnected(true)
            navigate("/chat")

        } catch (error) {
            if (error.status === 400) {
                toast.error("Room does not exist")
            }else{
                toast.error("error in joining room")
            }
            console.log(error);
        } 



    }

    async function createRoom() {
        if (!validateForm()) {
            return
        }
        try {
            const response = await createRoomAPI(detail.roomId)
            toast.success("Room created successfully")
            // console.log(response)
            console.log(response.data)
            setCurrentUser(detail.userName)
            setRoomId(detail.roomId)
            setConnected(true)
            navigate("/chat")
            joinChat();
        } catch (error) {
            if (error.status === 400) {
                toast.error("Room already exists")
            } else {
                toast.error("Room creation failed")
            }

        }
    }
    function validateForm() {
        if (detail.roomId.trim() === "" || detail.userName.trim() === "") {
            toast.error("Please fill all the fields")
            return false
        }
        return true
    }
    return (
        <div className='min-h-screen flex items-center justify-center '>
            <div className=' p-8  dark:border-gray-500 w-full max-w-md rounded dark:bg-white-800 shadow flex flex-col'>
                <h1 className='text-2xl font-semibold text-center'>Join/Create Chat</h1>
                <div className=''>
                    <label htmlFor="name" className="block font-medium mb-2">Name</label>
                    <input type="text" id="name"
                        onChange={handleFormInputChange}
                        value={detail.userName}
                        name='userName'
                        placeholder='Enter your name'
                        className='w-full px-4 py-2  border border-gray-300 rounded-lg  focus:outline-none focus:ring-5 focus:ring-blue-500'>
                    </input>
                </div>
                <div className='mt-4'>
                    <label htmlFor="roomid" className="block font-medium mb-2">Room ID</label>
                    <input type="text" id="name" className='w-full px-4 py-2
                      border border-gray-300 rounded-lg  focus:outline-none focus:ring-5 focus:ring-blue-500'
                        name='roomId'
                        onChange={handleFormInputChange}
                        value={detail.roomId}
                        placeholder='Enter Room ID'>
                    </input>
                </div>
                <div className='flex justify-center gap-2 mt-4'>
                    <button className='px-3 py-2 dark:bg-blue-600 hover:dark:bg-blue-700 text-white rounded'
                        onClick={createRoom}> Create ROOM</button>
                    <button className='px-3 py-2 dark:bg-green-600 hover:dark:bg-green-700 text-white rounded'
                        onClick={joinChat}> Join ROOM</button>
                </div>
            </div>

        </div>
    )
}
