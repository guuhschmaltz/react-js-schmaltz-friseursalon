import React from 'react';

import cabeloImg from '../images/cabelo.png';
import completoImg from '../images/completo.png';
import barbaImg from '../images/barba.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/services.css';

export default function Services() {
  return (
    <div id="page-services">
      <Header />
      <section className="services container">
          <h2 className="services__title">Catálogo</h2>
            <p className="services__description">A Schmaltz Friseursalon é a barbearia perfeita para você.
                Focada em estética,a Confraria conta com tudo que o homem moderno precisa.
                Atendemos todos tipos de clientes e gêneros de forma com que todos saiam satisfeitos.</p>
            <p className="services__description"> Um ambiente confortável,
              descontraído e em preservar a virilidade masculina, 
              com cuidados para todos os estilos de barba e cabelo,
              Tratamos nosso cliente de uma forma amigável e descontraida.</p>
                <ul className="services__cartoons">
                  <li className="cartoons cartoons--hair">
                    <h3 className="cartoons__title">Cabelo</h3>
                    <article className="cartoons__content">
                      <img src={cabeloImg} alt="Imagem do Cabelo" className="cartoons__img"></img>
                      <p className="cartoons__price"><em>R$ 30</em></p>
                      <p className="cartoons__text">Corte do Cabelo, Lavagem e Penteado</p>
                      <a href="https://api.whatsapp.com/send?l=pt_BR&phone=5511951082476&text=Olá Gustavo, tenho interesse realizar o serviço *Corte de Cabelo* que tem direito a Lavagem e Penteado, poderia me informar a disponibilidade de horários?" className="cartoons__button cartoons__button--hair">Contratar Serviço</a>
                    </article>
                  </li>
                  <li className="cartoons cartoons--complete">
                    <h3 className="cartoons__title">Completo</h3>
                    <article className="cartoons__content">
                    <img src={completoImg} alt="Imagem do Cabelo" className="cartoons__img"></img>
                    <p className="cartoons__price"><em>R$ 40</em></p>
                    <p className="cartoons__text">Pacote completo + Brinde</p>
                    <a className="cartoons__button cartoons__button--complete"
                      href="https://api.whatsapp.com/send?l=pt_BR&phone=5511951082476&text=Olá Gustavo, tenho interesse realizar o serviço *Pa cote Completo* que tem direito a brinde, poderia me informar a disponibilidade de horários?">Contratar Serviço</a>
                    </article>
                  </li>
                  <li className="cartoons cartoons--barber">
                    <h3 className="cartoons__title">Barba</h3>
                    <article className="cartoons__content">
                    <img src={barbaImg} alt="Imagem do Cabelo" className="cartoons__img"></img>
                    <p className="cartoons__price"><em>R$ 20</em></p>
                    <p className="cartoons__text">Corte e desenho da barba</p>
                    <a href="https://api.whatsapp.com/send?l=pt_BR&phone=5511951082476&text=Olá Gustavo, tenho interesse realizar o serviço *Corte e desenho de Barba*, poderia me informar a disponibilidade de horários?" className="cartoons__button cartoons__button--barber">Contratar Serviço</a>
                    </article>
                  </li>
                 </ul>
      </section>  
      <Footer />
    </div>
  );
}