import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import '../App.css';
import "./About.css"
import logo from "../Images/pfp.jpeg";
 
export default function About() {
  useEffect(() => {document.title = "@tcgmilan - rolam"})
  return (
    <div className="parallax">
      <div className="main_menu_dock">
        <Link className="main_menu_dock" to="/">PROJEKTEK</Link>
        <Link className="main_menu_dock" to="/">FŐOLDAL</Link>
        <Link className="main_menu_dock" to="/about">RÓLAM</Link>
        <Link className="main_menu_dock" to="/">ELÉRHETŐSÉGEK</Link>
      </div>
    
      <div className="title_dock">
        <img className="pfp_animation profile_picture" src={logo}></img>
        <h1 className="fade_in main_title">Horváth Balázs Milán</h1>
        <h3 className="fade_in sub_title">@tcgmilan</h3>
      </div>

      <div>
        <h1 className="about_title fade_in">ROLAM</h1>
        <h3 className="description">
  Sziasztok!<br></br>Horváth Balázs Milán vagyok, 17 éves!
  Jelenleg Somogy megyében élek, Nagyatádon, ahol az Ady Endre Gimnáziumban tanulok!
  Mikor elkezdtem tanulni programozást, nem voltam több 12 évesnél. A HTML nyelvet választottam, de sajnos 
  hamar rájöttem, hogy ez nem "igazi" programozás. Ekkor kezdtem mélyebben beleásni magam.
  Akkor tudatosult bennem, hogy ehhez még fiatal vagyok, látván, hogy a sok kód nem igazán nyert értelmet.
  Később, nagyjából 14 éves koromban fogtam hozzá a Javascript tanulásához, egy kedves barátom ajánlásával.
  Egy hónapnyi "szorgos" tanulás után, jelentkeztünk is egy versenyre. A verseny után, amit 3. helyezettként zártunk, 
  érdekelni kezdett több nyelv is. Megannyi próbálgatás után a C# és a Python mellett döntöttem. Idén már 3 éve tanulom a Python nyelvet, és eddig
  semmihez sem fogható élmélnyekben volt részem vele!

        </h3>
      </div>
  </div>
  );
}