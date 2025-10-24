import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Webpage from "./components/Webpage";
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VansListing from "./pages/Vans/VansListing";
import HostWebpage from "./components/HostWebpage";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import HostVans from "./pages/Host/HostVans"
import HostVansListing from "./pages/Host/HostVansListing";

/** ADMIN **/
import AdminWebpage from "./components/AdminWebpage"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import AdminVans from "./pages/Admin/AdminVans"
import AdminVansListing from "./pages/Admin/AdminVansListing"
import AdminVanEdit from "./pages/Admin/AdminVanEdit";

/** ERROR **/
import NotFound from "./components/NotFound";


export const AuthContext = React.createContext()
export const ButtonContext = React.createContext()

function App() {
    return (
        <BrowserRouter>
            <AuthContext.Provider value={{ auth: { isAuthenticated: false, user: null, password: null, email: null } }}>
                <Routes>
                    {/* PUBLIC LAYOUT */}
                    <Route element={<Webpage />}>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="vans" element={<Vans />} />
                        <Route path="vans/:id" element={<VansListing />} />

                        {/* HOST DASHBOARD */}
                        <Route path='host' element={<HostWebpage />}>
                            <Route index element={<Dashboard />} />
                            <Route path="income" element={<Income />} />
                            <Route path="reviews" element={<Reviews />} />
                            <Route path="reviews/:id" element={<Review />} />
                            <Route path="vans" element={<HostVans />} />
                            <Route path="vans/:id" element={<HostVansListing />} />
                        </Route>
                    </Route>

                    {/* ADMIN LAYOUT */}
                    <Route path='admin' element={<AdminWebpage />}>
                        <Route index element={<AdminVans />} />
                        <Route path='vans' element={<AdminVans />} />
                        <Route path='vans/:id' element={<AdminDashboard />}>
                            <Route index element={<AdminVansListing />} />
                            <Route path='edit' element={<AdminVanEdit />} />
                        </Route>
                    </Route>

                    {/* ERROR LAYOUT */}
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
