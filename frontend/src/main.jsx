import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter} from "react-router"
import AppRoutes from './config/routes.jsx'
import toast, { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AppRoutes />
            <Toaster position="top-center"/>
        </BrowserRouter>
    </StrictMode>
)
