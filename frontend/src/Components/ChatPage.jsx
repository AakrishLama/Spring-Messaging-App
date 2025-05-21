import React, { useRef, useState } from 'react'


export default function ChatPage() {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    const inputRef = useRef(null)
    const chatBoxRef = useRef(null)
    const [stompClient, setStompClient] = useState(null)
    const [roomid, setRoomid] = useState("")
    
  return (
    <div className=''>
        <header className='dark:border-blue-500 shadow py-5 flex justify-around p-4 items-center dark:bg-blue-800'>
            <div>
                <h1 className='text-2xl font-semibold'> Room:<span>groupChat</span></h1>
            </div>

            <div>
                <h1 className='text-2xl font-semibold'> User:<span>Aakrish</span></h1>

            </div>
                <button className='btn btn-danger rounded-full '>Leave Room</button>

            <div>
                
            </div>
        </header>

        {/* messages */}
        <main className=" border h-screen overflow-auto w-2/3 dark:bg-gray-800 mx-auto my-20 mt-0">
            <div>

            </div>

        </main>

        {/* input message */}
        <div className= " fixed bottom-2 w-2/3 w-full h-16">
            <div className= "h-full border w-2/3 mx-auto dark:bg-grey-800 gap-4 rounded">
                <input type= "textArea" placeholder= "Type your message here" 
                    className="dark:border-gray-700 h-full w-11/12 rounded text-center focus:outline-0">
                    </input>
                <button className='btn btn-primary flex rounded-full p-2 mx-2'>send</button>
            </div>


        </div>

    </div>
  )
}
