import React, {useContext} from "react"
import { Link } from "react-router-dom"
import Button from '../components/Buttons'
import { ButtonContext } from "../App";
import '../styles/home.css'

console.log("home rendered")

export default function Home() {

    return (
        <ButtonContext.Provider value={{ orangeLongButton: true }}>
            <div className="home-container">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Button.Long><Link to="vans">Find your van</Link></Button.Long>
            </div>
        </ButtonContext.Provider>
    )
};
