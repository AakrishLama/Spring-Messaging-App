import React from 'react'

export default function ChatPage() {
  return (
    <div className=''>
        <header className='dark:border-blue-500 shadow py-5 flex justify-around p-4 items-center'>
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

    </div>
  )
}
