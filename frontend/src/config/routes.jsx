import React from 'react'
import { Routes, Route } from 'react-router'
import App from '../App'

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/chat" element={<h1>Chat</h1>} />
            </Routes>
        </div>
    )
}
