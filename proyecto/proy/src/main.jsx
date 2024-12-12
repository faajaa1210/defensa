import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Estilos.css'
import Principal from "./Principal.jsx"
import{BrowserRouter} from "react-router-dom"
import React from 'react';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Principal/>
  </BrowserRouter>
)
