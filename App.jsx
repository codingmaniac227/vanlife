import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VansListing from "./pages/VansListing";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './server'


export const ButtonContext = React.createContext()

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VansListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);