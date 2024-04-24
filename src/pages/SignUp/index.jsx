import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./index.css";

const SignUp = () => {
  const link = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageErrorEmail, setMessageErrorEmail] = useState("");
  const [messageErrorPassword, setMessageErrorPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar o email aqui
    let validEmail;
    let validPassword;

    const minPasswordLength = 4;
    const maxPasswordLength = 60;

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setMessageErrorEmail("Informe um email ou número de telefone válido.");
      validEmail = false;
    } else {
      validEmail = true;
      setMessageErrorEmail("");
    }

    validPassword =
      password.length >= minPasswordLength &&
      password.length <= maxPasswordLength;
    setMessageErrorPassword(
      validPassword
        ? ""
        : `A senha deve ter entre ${minPasswordLength} e ${maxPasswordLength} caracteres.`
    );

    if (validEmail && validPassword) {
      setMessageErrorEmail("");
      setMessageErrorPassword("");
      alert("Sucesso!!");
      link("/preview");
    }
  };

  return (
    <div id="body">
      <header>
        <img
          onClick={() => link("/")}
          id="logo"
          src="/NetflixLogo.svg"
          alt="logo"
        />
      </header>
      <section className="container">
        <div className="login">
          <h2>Entrar</h2>
          <form className="box-input" onSubmit={handleSubmit}>
            <input
              className="email"
              type="email"
              placeholder="Email ou número de telefone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {messageErrorEmail && (
              <div className="message-error-email">{messageErrorEmail}</div>
            )}
            <input
              className="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            {messageErrorPassword && (
              <div className="message-error-password">
                {messageErrorPassword}
              </div>
            )}
            <button type="submit" className="btn">
              Entrar
            </button>
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
            não é um robô.
            <span> Saiba mais.</span>
          </p>
        </div>
      </section>
      {/* <footer>Netflix</footer> */}
    </div>
  );
};

export default SignUp;
