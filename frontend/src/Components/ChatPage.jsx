import React, { useRef, useState, useEffect } from 'react'
import useChatContext from '../context/chatContext'
import { useNavigate } from 'react-router';
import { baseURL } from '../config/AxiosHelper';
import SockJS from 'sockjs-client';
import { Stomp } from "@stomp/stompjs"
import { toast } from 'react-hot-toast';
import { getMessages } from '../services/RoomService';


export default function ChatPage() {
    const { roomId, currentUser, connected, setConnected, setRoomId, setCurrentUser } = useChatContext();
    // console.log(roomId)
    // console.log(currentUser)
    // console.log(connected)

    const navigate = useNavigate()
    useEffect(() => {
        if (!connected) {
            navigate("/")
        }
    }, [connected, roomId, currentUser])

    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    const inputRef = useRef(null)
    const chatBoxRef = useRef(null)
    const [stompClient, setStompClient] = useState(null)

    /**
     * load messages of the room.
     */
    useEffect(() => {
        async function loadMesssage() {
            try {
                const messages = await getMessages(roomId)
                setMessages(messages)

            } catch (error) {

            }

        }
        loadMesssage();
    }, [messages])




    // Stompclient initialization.
    useEffect(() => {
        const connectWebSocket = () => {
            const sock = new SockJS(`${baseURL}/chat`)
            const client = Stomp.over(sock)
            client.connect({}, () => {
                setStompClient(client);
                toast.success("connected")
                client.subscribe(`/topic/room/${roomId}`, (message) => {
                    console.log(message);
                    const newMessage = JSON.parse(message.body);
                    setMessages((prev) => [...prev, newMessage]);
                })
            });
        };
        connectWebSocket();
    }, [roomId])

    /**
     * Send message in the room.
     */
    const sendMessage = async () => {
        if (stompClient && connected && input.trim()) {
            console.log(input)
            const message = {
                sender: currentUser,
                content: input,
                roomId: roomId,
            };
            stompClient.send(`/app/sendMessage/${roomId}`, {}, JSON.stringify(message));
            setInput("")
        }
    }

    const handleLogOut=()=>{ 
        stompClient.disconnect()
        setConnected(false)
        setRoomId("")
        setCurrentUser("")
        navigate("/")
    }




    return (
        <div className=''>
            <header className='dark:border-blue-500 shadow py-5 flex justify-around p-4 items-center dark:bg-blue-800'>
                <div>
                    <h1 className='text-2xl font-semibold'> Room:<span>{roomId}</span></h1>
                </div>

                <div>
                    <h1 className='text-2xl font-semibold'> User:<span>{currentUser}</span></h1>

                </div>
                <button onClick={handleLogOut} className='btn btn-danger rounded-full '>Leave Room</button>

                <div>

                </div>
            </header>

            {/* messages */}
            <main  className=" border px-10 h-screen overflow-auto w-2/3 dark:bg-gray-800 mx-auto my-20 mt-0">
                {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.sender === currentUser ? "justify-end" : "justify-start"}`}>
                        <div className={`mt-2   ${message.sender === currentUser ? "bg-orange-400" : "bg-green-400"} p-2 rounded max-w-xs`} >
                            <div className='flex flex-row gap-2'>
                                <img src={"https://avatar.iran.liara.run/public/boy"} alt="no image "
                                    className='h-12 w-12'></img>
                                <div className=' flex flex-col gap-2 p-4'>
                                    <p className='text-sm font-bold '>{message.sender}</p>
                                    <p>{message.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </main>

            {/* input message */}
            <div className=" fixed bottom-2 w-2/3 w-full h-16">
                <div className="h-full border w-2/3 mx-auto dark:bg-grey-800 gap-4 rounded">
                    <input value={input}
                        onChange={(e) => { setInput(e.target.value) }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                sendMessage()
                            }
                        }}
                        type="textArea" placeholder="Type your message here"
                        className="dark:border-gray-700 h-full w-11/12 rounded text-center focus:outline-0">
                    </input>
                    <button onClick={sendMessage} className='btn btn-primary flex rounded-full p-2 mx-2'>send</button>
                </div>
            </div>

        </div>
    )
}
