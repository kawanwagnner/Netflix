import React from "react";

import "./index.css";

const SignUp = () => {
  return (
    <div id="body">
      {/* <header>
        <div className="logo">
          <a href="#">
            <img src="/NetflixLogo.svg" alt="logo" />
          </a>
        </div>
      </header> */}
      <section className="container">
        <div className="login">
          <h2>Entrar</h2>
          <form className="box-input">
            <input type="email" placeholder="Email ou número de telefone" />
            <input type="password" placeholder="Senha" />
            <a href="#" className="btn">
              Entrar
            </a>
          </form>
          <div className="support">
            <div className="remember">
              <span>
                <input type="checkbox" id="check" />
              </span>
              <label htmlFor="check">Lembre-se de mim</label>
            </div>
            <div className="help">
              <a href="#">Precisa de ajuda?</a>
            </div>
          </div>
          <div className="footer">
            <p>Novo por aqui?</p>
            <a href="#">Assine agora.</a>
          </div>
          <p className="description_footer">
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô
            <span>Saiba mais.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
