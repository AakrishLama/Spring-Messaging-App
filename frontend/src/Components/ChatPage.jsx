import React from 'react'

export default function ChatPage() {
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

        {/* input message */}
        <div className= " fixed bottom-2 w-2/3 w-full h-16">
            <div className= "h-full border w-2/3 mx-auto dark:bg-grey-800 gap-4 rounded">
                <input type= "textArea" placeholder= "Type your message here" className="dark:border-gray-700 h-full w-11/12  text-center"></input>
                <button className='btn btn-primary flex rounded-full p-2 mx-2'>send</button>
            </div>


        </div>

    </div>
  )
}
