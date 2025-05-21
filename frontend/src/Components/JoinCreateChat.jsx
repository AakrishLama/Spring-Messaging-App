import React, { useState } from 'react'
import toast from 'react-hot-toast'


export default function JoinCreateChat() {
    const [detail, setDetail] = useState({
        roomId: "",
        userName: ""
    });
    function handleFormInputChange(event) {
        setDetail({
            ...detail, [event.target.name]: event.target.value
        })
    }
    function joinChat() {
        if(!validateForm()) {
            return
        }
        // join room logic
        console.log("join chat")
    }

    function createRoom() {
        if(!validateForm()) {
            return
        }
        //create room logic
        console.log("create room")
    }
    function validateForm() {
        if(detail.roomId.trim() === "" || detail.userName.trim() === "") {
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
