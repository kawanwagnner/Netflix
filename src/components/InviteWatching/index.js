import { useNavigate } from "react-router-dom";

import "./index.module.scss";

const InviteWatching = () => {
  const link = useNavigate();

  return (
    <div className="invite">
      <h3 className="text--">
        Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
      </h3>
      <div className="logon-form">
        <input
          type="email"
          name="email"
          className="email"
          id="email"
          placeholder="Email"
        />

        <button className="letsGo" onClick={() => link("/login")}>
          Vamos lá{" "}
          <i className="arrowRight">
            <img src="/arrowRight.svg" />
          </i>
        </button>
      </div>
    </div>
  );
};

export default InviteWatching;
