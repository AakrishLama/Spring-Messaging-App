import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router"
import AppRoutes from './config/routes.jsx'
import toast, { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChatProvider } from '../context/chatContext.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Toaster position="top-center" />
            <ChatProvider>
                <AppRoutes />
            </ChatProvider>
        </BrowserRouter>
    </StrictMode>
)
