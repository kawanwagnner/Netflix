import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const HomePage = () => {
  const link = useNavigate();

  return (
    <div className="home">
      <header className="header">
        <i className="logo">
          <img src="/NetflixLogo.svg" alt="/Logo Netflix" />
        </i>
        <nav className="navbar">
          <i className="traslateIcon">
            <img src="/traslateIcon.svg" />
          </i>
          <select className="language">
            <option
              selected=""
              lang="pt"
              value="pt-BR"
              onClick={() => link("/")}
            >
              Português
            </option>
            <option lang="en" value="en-US">
              English
            </option>
          </select>
          <i className="arrowDown">
            <img src="/arrowDown.svg" />
          </i>
          <button className="SignIn" onClick={() => link("/login")}>
            Entrar
          </button>
        </nav>
      </header>

      <section className="container--home">
        <div className="content">
          <div className="content--text">
            <h1 className="text--main">
              Os maiores sucessos do Brasil e do mundo. As melhores histórias.
              Tudo na Netflix.
            </h1>
            <h3 className="text--1">
              Assista onde quiser. Cancele quando quiser.
            </h3>
            <br />
            <h3 className="text--2">
              Quer assistir? Informe seu email para criar ou reiniciar sua
              assinatura.
            </h3>
          </div>

          <div className="logon-form">
            <input
              type="email"
              name="email"
              className="email"
              id="email"
              placeholder="Email"
            />

            <button className="letsGo" onClick={() => link("/")}>
              Vamos lá{" "}
              <i className="arrowRight">
                <img src="/arrowRight.svg" />
              </i>
            </button>
          </div>
        </div>
      </section>
      <div className="banner--bg">
        <div className="container--banner">
          <i className="popcorn--img">
            <img src="/Popcorn.svg" />
          </i>
          <div class="text-promotion">
            <p>A Netflix que você adora por apenas R$18,90.</p>
            <p>Assine o plano Padrão com anúncios.</p>
            <button role="link" class="about--more">
              Saiba mais
              <img src="/arrowRight.svg" />
            </button>
          </div>
        </div>
      </div>
      <section className="landing--page"></section>
    </div>
  );
};

export default HomePage;
