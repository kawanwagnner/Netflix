import React from "react";

import "./index.css";

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

export { perguntasFrequentes, Question };
