import { useNavigate } from "react-router-dom";
import InviteWatching from "../../components/InviteWatching";
import { perguntasFrequentes, Question } from "../../components/Quests";
import ButtonLanguage from "../../components/ButtonLanguage";

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
          <ButtonLanguage />
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
            <InviteWatching />
          </div>
        </div>
      </section>
      <section className="landing--page">
        <div className="banner--bg">
          <div className="container--banner">
            <i className="popcorn--img">
              <img src="/Popcorn.svg" />
            </i>
            <div className="text-promotion">
              <strong>A Netflix que você adora por apenas R$18,90.</strong>
              <p>Assine o plano Padrão com anúncios.</p>
              <button role="link" className="about--more">
                Saiba mais
                <img src="/arrowRight.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="container-flex">
          <div className="container-message">
            <h1 className="title-mock">Aproveite na TV</h1>
            <p className="text-mock">
              Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              aparelhos de Blu-ray e outros dispositivos.
            </p>
          </div>
          <div className="container-video">
            <div className="video-e-img">
              <img
                alt="Mock"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              />
              <video autoPlay playsInline muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="container-reverse hr">
          <div className="container-message">
            <h1 className="title-mock">Assista onde quiser</h1>
            <p className="text-mock">
              Assista a quantos filmes e séries quiser no celular, tablet,
              laptop e TV.
            </p>
          </div>
          <div className="container-video-reverse">
            <div className="video-e-img-reverse">
              <img
                alt="Mock"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              />
              <video autoPlay playsInline muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="container-flex-three hr">
          <div className="container-message">
            <h1 className="title-mock">Crie perfis para crianças</h1>
            <p className="text-mock">
              Deixe as crianças se aventurarem com seus personagens favoritos em
              um espaço feito só para elas, sem pagar a mais por isso.
            </p>
          </div>
          <div className="container-video">
            <img
              alt="Mock"
              src="https://occ-0-1310-1740.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABUIQf-EOyyk3NFohgiSUVv5tl73COXhof_N8Gz2GD6IqJ0Cz-DzUfRzj2NhSocLHDrNUlFL3NK2fDG6MCKzVHt3kCmSOjrf4SuVb.png?r=190"
            />
          </div>
        </div>
        <div className="container-reverse hr">
          <div className="container-message">
            <h1 className="title-mock">Baixe séries para assistir offline</h1>
            <p className="text-mock">
              Disponíveis somente em planos sem anúncios.
            </p>
          </div>
          <div className="container-video-reverse">
            <img
              alt="Mock"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            />

            <div className="mini-popup">
              <div className="img-popup">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
              </div>
              <div className="container-text-serie">
                <div className="name-serie">Stranger Things</div>
                <div className="loading-download">
                  Download em andamento...{" "}
                </div>
              </div>
              <div aria-hidden="true" className="icon-smartphone"></div>
            </div>
          </div>
        </div>
        <div className="common-questions hr">
          <h1>Perguntas frequentes</h1>

          {perguntasFrequentes.map((pergunta, index) => (
            <Question key={index} text={pergunta} />
          ))}
        </div>

        <div className="repetition-quest">
          <InviteWatching />
        </div>

        <div className="rodape hr">
          <h4>
            Dúvidas? Ligue <span>0800 591 2876</span>
          </h4>
          <div className="columns">
            {" "}
            <div className="columns--1">
              <div className="column ">
                <a href="#">Perguntas frequentes</a>
                <a href="#">Relações com investidores</a>
                <a href="#">Formas de assistir</a>
                <a href="#">Informações corporativas</a>
                <a href="#">Só na Netflix</a>
                <div className="space-letter">
                  <div className="visual-effect">
                    <ButtonLanguage />
                  </div>
                  <br />
                  <p>KawFlix Brasil</p>
                </div>
              </div>
              <div className="column">
                <a href="#">Central de Ajuda</a>
                <a href="#">Carreiras</a>
                <a href="#">Termos de Uso</a>
                <a href="#">Entre em contato</a>
              </div>
            </div>
            <div className="columns--2">
              <div className="column">
                <a href="#">Conta</a>
                <a href="#">Resgatar cartão pré-pago</a>
                <a href="#">Privacidade</a>
                <a href="#">Teste de velocidade</a>
              </div>
              <div className="column">
                <a href="#">Media Center</a>
                <a href="#">Comprar cartão pré-pago</a>
                <a href="#">Preferências de cookies</a>
                <a href="#">Avisos legais</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
