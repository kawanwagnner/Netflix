import React from "react";

import "./index.css";

const ButtonLanguage = () => {
  return (
    <>
      <i className="traslateIcon">
        <img src="/traslateIcon.svg" />
      </i>
      <select className="language">
        <option selected="" lang="pt" value="pt-BR" onClick={() => link("/")}>
          Português
        </option>
        <option lang="en" value="en-US">
          English
        </option>
      </select>
      <i className="arrowDown">
        <img src="/arrowDown.svg" />
      </i>
    </>
  );
};

export default ButtonLanguage;
