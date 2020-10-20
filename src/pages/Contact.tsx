import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/pages/contact.css';

export default function Contact() {
  return(
     <div id="page-contact">
       <Header />
       <section className="form container">
        <form className="form__panel container" action="mailto:guuhschmaltz@gmail.com" method="post">
            <h2 className="form__title">Contato</h2>
            <label className="form__label" htmlFor="name" >Nome completo</label>
            <input className="form__input" type="text" id="name" required/>

            <label className="form__label" htmlFor="email" >Email</label>
            <input className="form__input" type="email" id="email" required placeholder="seuemail@dominio.com"/>

            <label className="form__label" htmlFor="tel">Telefone</label>
            <input className="form__input" type="tel" id="tel" required placeholder="(XX) XXXXX-XXXX"/>

            <label className="form__label" htmlFor="msg">Mensagem</label>
            <textarea className="form__textarea"  id="msg" required></textarea>

            <button className="form__button" type="submit">Enviar Formulário</button>
        </form>
        </section>
       <Footer />
     </div>
  );
};