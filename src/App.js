import React, { useEffect } from 'react';
import { BrowserRouter, Link, Router } from "react-router-dom"
import './App.css';
import logo from "./Images/pfp.jpeg";

 
export default function App() {
  useEffect(() => {document.title = "@tcgmilan"})
  return (
    <div className="parallax">
      <div className="main_menu_dock">
        <Link className="fade_in main_menu_dock" to="/">FŐOLDAL</Link>
        <Link className="fade_in main_menu_dock" to="/about">RÓLAM</Link>
        <Link className="fade_in main_menu_dock" to="/">PROJEKTEK</Link>
        <Link className="fade_in main_menu_dock" to="/">ELÉRHETŐSÉGEK</Link>
      </div>
      <br></br>
      <div className="title_dock">
        <img className="pfp_animation profile_picture" src={logo}></img>
        <h1 className="fade_in main_title">Horváth Balázs Milán</h1>
        <h3 className="fade_in sub_title">@tcgmilan</h3>
      </div>

      <br></br>
      <br></br>

      <div className="title_dock">
        <div>
          <h1 className=" fade_in main_title_no_center">Discord Szerverem</h1>
          <iframe className="discord_widget fade_in" src="https://discord.com/widget?id=902154838614368256&theme=dark" width="300" height="450" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
        </div>
      </div>
    </div>
    
    
  );
}