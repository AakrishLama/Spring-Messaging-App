import React from 'react'

export default function JoinCreateChat() {
    return (
        <div className='min-h-screen flex items-center justify-center '>
            <div className=' p-8  dark:border-gray-500 w-full max-w-md rounded dark:bg-white-800 shadow flex flex-col'>
                <h1 className='text-2xl font-semibold text-center'>Join/Create Chat</h1>
                <div className=''>
                    <label htmlFor="name" className="block font-medium mb-2">Name</label>
                    <input type="text" id="name" className='w-full px-4 py-2  border border-gray-300 rounded-lg  focus:outline-none focus:ring-5 focus:ring-blue-500'></input>
                </div>
                <div className='mt-4'>
                    <label htmlFor="roomid" className="block font-medium mb-2">Room ID</label>
                    <input type="text" id="name" className='w-full px-4 py-2  border border-gray-300 rounded-lg  focus:outline-none focus:ring-5 focus:ring-blue-500'></input>
                </div>
                <div className='flex justify-center gap-2 mt-4'>
                    <button className='px-3 py-2 dark:bg-blue-600 hover:dark:bg-blue-700 text-white rounded'> Create ROOM</button>
                    <button className='px-3 py-2 dark:bg-green-600 hover:dark:bg-green-700 text-white rounded'> Join ROOM</button>
                </div>
            </div>

        </div>
    )
}
