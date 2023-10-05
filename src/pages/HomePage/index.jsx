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

      <div className="bg-container">
        <div className="background">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/c66c94fd-7bcd-4be0-ac29-0f44d08b80b0/BR-pt-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="Fundo da página"
          />
        </div>
      </div>
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
      <section className="landing--page">
        <div className="default">
          <div className="container-message">
            <h1>Aproveite na TV</h1>
            <p>
              Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              aparelhos de Blu-ray e outros dispositivos.
            </p>
          </div>
          <div class="default-ltr-cache-bjn8wh">
            <img
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              data-uia="nmhp-card-animation-asset-image"
              class="default-ltr-cache-1d3w5wq"
            />
            <div class="video">
              <video
                data-uia="nmhp-card-animation-asset-video"
                autoplay=""
                playsinline=""
                muted=""
                loop=""
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
              <div class="default-ltr-cache-0"></div>
              <div
                data-uia="nmhp-card-animation-asset-custom"
                aria-hidden="true"
                class="default-ltr-cache-0 e15c37ii13"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
