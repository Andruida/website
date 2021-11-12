import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import '../App.css';
import "./Projects.css"
import logo from "../Images/pfp.jpeg";
 
export default function Projects() {
  useEffect(() => {document.title = "@tcgmilan - projects"})
  return (
    <div className="parallax">
        <div className="main_menu_dock fade_in">
        <Link className="main_menu_dock" to="/">FŐOLDAL</Link>
        <Link className="main_menu_dock" to="/about">RÓLAM</Link>
        <Link className="main_menu_dock" to="/projects">PROJEKTEK</Link>
        <Link className="main_menu_dock" to="/contacts">ELÉRHETŐSÉGEK</Link>
        </div>
    
        <div className="title_dock ">
        <Link to="/"><img className="pfp_animation profile_picture" src={logo}></img></Link>
        <h1 className="fade_in main_title">Horváth Balázs Milán</h1>
        <h2 className="fade_in sub_title">@tcgmilan</h2>
        </div>

        <div className="fade_in project">
            <div>
                <h1 className="title">PyPong</h1>
                <h3 className="description">Egy Pythonban írt Pong játék</h3>
                <a href="https://github.com/tcgmilan/pypong"><h3 className="popup links"> {">"}Github Repository{"<"} </h3></a>
                <h3 className="links">Github Clone</h3>
                <div className="markdown"> $ pip install pygame <br></br> $ git clone https://github.com/tcgmilan/pypong.git <br></br> $ cd pypong <br></br> $ python .</div>
            </div>

            <div>
                <h1 className="title">PyMail</h1>
                <h3 className="description">Egy Pythonban írt Email küldő</h3>
                <a href="https://github.com/tcgmilan/pymail"><h3 className="popup links"> {">"}Github Repository{"<"} </h3></a>
                <h3 className="links">Github Clone</h3>
                <div className="markdown"> $ pip install python-tk <br></br> $ git clone https://github.com/tcgmilan/pymail.git <br></br> $ cd pymail <br></br> $ python .</div>
            </div>
        </div>
        <div className="fade_in project">
            <div>
                <h1 className="title">Windows 11 With/Without TPM2.0</h1>
                <h3 className="description">Windows 11 TPM Támogatással <br></br>VAGY<br></br> Windows 11 TPM Támogatás Nélkül</h3>
                <a href="https://drive.google.com/drive/folders/1x4TDy10x9PW4pLc7k3hgBS6wFE1_kM0C?usp=sharing"><h3 className="popup links"> {">"}Drive{"<"} </h3></a>
                <h3 className="links">Telepítési Útmutató</h3>
                <div className="markdown">OLVASSEL.txt</div>
            </div>





        </div>
    </div>
  );
}