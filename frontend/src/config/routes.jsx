import React from 'react'
import { Routes, Route } from 'react-router'
import App from '../App'

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/chat" element={<h1>Chat</h1>} />
                <Route path= "*" element= {<h1>404 not found</h1>}></Route>
            </Routes>
        </div>
    )
}
