import "./index.module.scss";

const ButtonLanguage = () => {
  return (
    <>
      <i className="traslateIcon">
        <img src="/traslateIcon.svg" />
      </i>
      <select className="language" defaultValue="pt-BR">
        <option lang="pt" value="pt-BR">
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
