import React from "react";

import "./index.css";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img src="/NetflixLogo.svg" alt="Logo Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Usuário"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
