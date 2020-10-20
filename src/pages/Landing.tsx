import React from 'react';
import whatsAppImg from '../images/whatsapp.png';
import playStoreImg from '../images/playstore.png';
import appStoreImg from '../images/appstore.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/landing.css';


export default function Landing() {
  return (
    <div id="page-landing">
      <Header />
        <section className="banner">
            <div className="banner__img"></div>
            <h2 className="banner__title">A arte mora aqui!</h2>
        </section>
        <section className="about container">
            <h3 className="about__title">Sobre</h3>
            <p className="about__description">
                Com o propósito de promover um atendimento com excelência e qualidade 
                resgatando a virilidade masculina, Gustavo Schmaltz criou a 
                <strong>Schmaltz Friseursalon</strong>, a melhor barbearia do Brasil.
                Um lugar agradável direcionado aos homens servindo serviços 
                tradicionais como cortes de cabelo, barba e bigode</p>
        </section>
        <section className="location container">
            <div className="location__panel">
            <h4 className="location__title">Venha nos visitar</h4>
            
            <address className="location__address">
              Rua do Corte bem Feito, 0987<br/>
              Cotia, São Paulo
            </address>
            <p className="location__description">Nosso estabelecimento estará de portas abertas,
             estamos a sua espera
             </p>
            </div>
        </section>
        <section className="schedule container">
            <h5 className="schedule__title">Horário de Funcionamento</h5>
                <table className="schedule__table">
                    <tr>
                        <th>Dia da Semana</th>
                        <th>Horário de Funcionamento</th>
                    </tr>
                    <tr>
                        <td>Domingo</td>
                        <td>Fechado</td>
                    </tr>
                    <tr>
                        <td>Segunda-Feira</td>
                        <td>Fechado</td>
                    </tr>
                    <tr>
                        <td>Terça-Feira</td>
                        <td>08:00 ~ 20:00</td>
                    </tr>
                    <tr>
                        <td>Quarta-Feira</td>
                        <td>08:00 ~ 20:00</td>
                    </tr>
                    <tr>
                        <td>Quinta-Feira</td>
                        <td>08:00 ~ 20:00</td>
                    </tr>
                    <tr>
                        <td>Sexta-Feira</td>
                        <td>08:00 ~ 20:00</td>
                    </tr>
                    <tr>
                        <td>Sábado</td>
                        <td>08:00 ~ 20:00</td>
                    </tr>
                  </table>
        </section>
        <section className="app container">
            <h6 className="app__title">Agende seu Horário</h6>
            <p className="app__description">Faça seu agendamento por meio de nossas plataformas!</p>
            <ul className="app__platforms">
                <li>    
                  <a href="https://api.whatsapp.com/send?l=pt_BR&phone=5511951082476&text=Olá Gustavo, vim através de seu site e gostaria de fazer um agendamento, poderia me informar os planos e horários disponíveis?" className="app__download">
                  <p>WhatsApp</p>
                   <img src={whatsAppImg} alt="Ícone do WhatsApp"></img>
                   </a>
                </li>
                <li>
                  <a href="https://play.google.com/store?hl=pt&gl=US" className="app__download">
                  <p>PlayStore</p>
                    <img src={playStoreImg} alt="Ícone do AppStore"></img>
                  </a>  
                </li>
                <li>
                  <a href="https://www.apple.com/br/ios/app-store/" className="app__download">
                  <p>AppStore</p>
                    <img src={appStoreImg} alt="Ícone do AppStore"></img>
                  </a>  
                </li>
            </ul>
        </section>
        <Footer />
    </div>
  );
}
