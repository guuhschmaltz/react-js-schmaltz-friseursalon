import React from 'react';
import { Link } from 'react-router-dom';
import barberLogo from '../images/barber.png';
import '../styles/components/header.css';
 
export default function Header(){
  return(
    <div className="header  container">
      <img src={barberLogo} alt="Logo da Barbearia" className="header__logo"></img>
      <h1 className="header__title">Schmaltz Friseursalon | Barber Shop</h1>
      <nav className="header__nav">
            <ul>
                <li className="header__link"><Link to="/">Home</Link></li>
                <li className="header__link"><Link to="/services">Serviços</Link></li>
                <li className="header__link"><Link to="/contact">Contato</Link></li>
            </ul>
      </nav>
    </div>
  );
}