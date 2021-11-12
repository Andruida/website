import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import '../App.css';
import "./About.css"
import logo from "../Images/pfp.jpeg";
import dc_logo from "../Images/discord_contact.jpg";
 
export default function About() {
  useEffect(() => {document.title = "@tcgmilan - rolam"})
  return (
    <div className="parallax">
        <div className="main_menu_dock fade_in">
            <Link className="main_menu_dock" to="/">FŐOLDAL</Link>
            <Link className="main_menu_dock" to="/about">RÓLAM</Link>
            <Link className="main_menu_dock" to="/projects">PROJEKTEK</Link>
            <Link className="main_menu_dock" to="/contacts">ELÉRHETŐSÉGEK</Link>
        </div>
        
        <div className="title_dock">
            <Link to="/"><img className="pfp_animation profile_picture" src={logo}></img></Link>
            <h1 className="fade_in main_title">Horváth Balázs Milán</h1>
            <h2 className="fade_in sub_title">@tcgmilan</h2>
        </div>

        <div className="title_dock">
            <div>
                <img className="pfp_animation profile_picture" src={dc_logo}></img>
            </div>
        </div>
    

  </div>
  );
}