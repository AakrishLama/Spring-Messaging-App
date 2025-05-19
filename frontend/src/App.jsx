import { useState } from 'react'
import './App.css'
import toast from 'react-hot-toast'
import JoinCreateChat from './Components/JoinCreateChat'

function App() {
    return (
        <>
            <div>
                <h1 >Main page 1</h1>
                <button className= 'btn btn-primary ' onClick= {()=>{toast.success("this is clicked")}}>click</button>
                <JoinCreateChat />
            </div>
        </>
    )
}

export default App
