import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router"
import AppRoutes from './config/routes.jsx'
import toast, { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChatProvider } from './context/ChatContext.jsx'


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <Toaster position="top-center" />
        <ChatProvider>
            <AppRoutes />
        </ChatProvider>
    </BrowserRouter>
)
