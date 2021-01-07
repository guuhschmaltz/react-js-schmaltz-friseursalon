import React from 'react';
import fbLogo from '../images/facebook.png';
import igLogo from '../images/instagram.png';
import barberLogo from '../images/barber.png';
import '../styles/components/footer.css';
 
export default function Footer(){
  return(
    <div className="footer container">
        <img src={barberLogo} alt="Logo da Barbearia" className="footer__logo"/>
        <ul className="footer__social">
            <li><a href="https://facebook.com" className="footer__midia"><img src={fbLogo} alt="Ícone do Facebook"/></a></li>
            <li><a href="https://instagram.com" className="footer__midia"><img src={igLogo} alt="Ícone do Instagram"/></a></li>
        </ul>
        <nav>
        </nav>
        <p className="footer__copyright"><small>&copy; Copyright Schmaltz Friseursalon | Barber Shop</small></p>
    </div>
  );
}