import "./App.css"
import { Routes } from "./Routes/Routes.js"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider} from "react-helmet-async"

export default function App() {
  return (
    <HelmetProvider>
      <div>
        <Routes/>
        <ToastContainer/>
      </div>
    </HelmetProvider>
    
  )
}

 