import React from 'react';
import WhatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars.githubusercontent.com/u/66634283?v=4" alt="Avatar Nádia Ligia" />
        <div>
          <strong>Nádia Ligia</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={WhatsappIcon} alt="Ícone do Whatsapp" />
          Entrar em contato
        </button>
        
      </footer>
    </article>
  );
}

export default TeacherItem;