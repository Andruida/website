import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import About from "./Components/About"
import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts"

const Routing = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
