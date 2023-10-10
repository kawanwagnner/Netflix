import { useState } from "react";

import "./index.css";

const ButtonLanguage = () => {
  const [selectOption, setselectOption] = useState('opcao2');

  const handleChange = (event) => {
    setselectOption(event.target.value);
  }

  return (
    <>
      <i className="traslateIcon">
        <img src="/traslateIcon.svg" />
      </i>
      <select className="language" value={selectOption} onChange={handleChange}>
        <option selected="" lang="pt" value="pt-BR">
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
