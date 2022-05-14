import React from "react";
import "./deck.css";
import Logo from "../Logo/Logo";
import Flashcard from "./Flashcard";
import Footer from "../Footer/Footer";

export default function Deck() {
  const perguntas = [
    "Você gosta de pão?",
    "Você gosta muito de pão?",
    "Muito?",
    "Mesmo?",
  ];

  const [respondidas, setRespondidas] = React.useState(0);
  const [icones, setIcones] = React.useState([]);

  return (
    <>
      <div className="deck">
        <Logo classe={"logo2"} />
        <div className="flashcards">
          {perguntas.map((p, index) => (
            <Flashcard
              pergunta={p}
              indexPergunta={index + 1}
              contaRespostas={setRespondidas}
              qtdRespostas={respondidas}
              mudarIcones={setIcones}
              iconesAtuais={icones}
            />
          ))}
        </div>
        <Footer qtdRespondidas={respondidas} icones={icones} />
      </div>
    </>
  );
}
