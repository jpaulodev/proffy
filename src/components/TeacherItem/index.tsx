import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/17519835?s=400&u=92d934bd78ad01ec40935ffa97da50b46720ebd7&v=4"
          alt="João Paulo"
        />
        <div>
          <strong>João Paulo</strong>
          <span>Lorem Ipsum</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores neque
        impedit blanditiis accusantium? Eum, nam maxime magni quis ipsam a
        dignissimos perspiciatis. Quam est labore eaque et suscipit aliquam.
        Minus!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
