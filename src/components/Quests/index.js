import PropTypes from "prop-types";
import "./index.module.scss";

const perguntasFrequentes = [
  "O que é a Netflix?",
  "Quanto custa a Netflix?",
  "Onde posso assistir?",
  "Como faço para cancelar?",
  "O que eu posso assistir na Netflix?",
  "A Netflix é adequada para crianças?",
];

const Question = ({ text }) => {
  return (
    <div className="question">
      <span>{text}</span> <img src="/moreOptions.svg" className="more" />
    </div>
  );
};

Question.propTypes = {
  text: PropTypes.string.isRequired,
};

export { perguntasFrequentes, Question };
