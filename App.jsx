import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Webpage from "./components/Webpage";
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import Vans from "./pages/Vans/Vans"
import VansListing from "./pages/Vans/VansListing";
import './server'
import HostWebpage from "./components/HostWebpage";



export const AuthContext = React.createContext()
export const ButtonContext = React.createContext()

function App() {
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ auth: {isAuthenticated: false, user: null, password: null, email: null} }}>
          <Routes>
            <Route element={<Webpage />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VansListing />} />
                <Route element={<HostWebpage />}>
                    <Route path="/host" element={<Dashboard />} />
                    <Route path="/host/income" element={<Income />} />
                    <Route path="/host/reviews" element={<Reviews />} />
                    <Route path="/host/reviews/:id" element={<Review />} />
                </Route>
            </Route>
          </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);