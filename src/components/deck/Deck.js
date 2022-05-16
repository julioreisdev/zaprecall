import React from "react";
import "./deck.css";
import Logo from "../Logo/Logo";
import Flashcard from "./Flashcard";
import Footer from "../Footer/Footer";

export default function Deck() {
  const perguntas = [
    {
      question: "Como ganhar muito dinheiro sendo dev?",
      response: "42 sempre é a resposta! Meu brother"
    },
    {
      question: "Qual a resposta pra todas as coisas?",
      response: "42 sempre é a resposta!"
    },
    {
      question: "Como ser um dev de sucesso?",
      response: "42 sempre é a resposta! pow"
    },
    {
      question: "42?",
      response: "42 sempre!!!"
    }
  ];

  perguntas.sort(function () {
    return Math.random() - 0.5;
  });

  const [respondidas, setRespondidas] = React.useState(0);
  const [icones, setIcones] = React.useState([]);
  const [qtdLembrou, setQtdLembrou] = React.useState(0);

  return (
    <>
      <div className="deck">
        <Logo classe={"logo2"} />
        <div className="flashcards">
          {perguntas.map((p, index) => (
            <Flashcard
              key={index}
              dadosTexto={p}
              indexPergunta={index + 1}
              contaRespostas={setRespondidas}
              qtdRespostas={respondidas}
              mudarIcones={setIcones}
              iconesAtuais={icones}
              lembrouQtd={qtdLembrou}
              setLembrouQtd={setQtdLembrou}
            />
          ))}
        </div>
        <Footer qtdRespondidas={respondidas} icones={icones} perguntas={perguntas} qtd={qtdLembrou} />
      </div>
    </>
  );
}
