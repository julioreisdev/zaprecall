import React from "react";
import "./deck.css";
import Logo from "../Logo/Logo";
import seta from '../../assets/img/ZapRecall-Recursos/setinha.png';

export default function Deck() {
  const perguntas = [
    "Você gosta de pão?",
    "Você gosta muito de pão?",
    "Muito?",
  ];

  function Flashcard(props) {
    const [telaFlash, setTelaFlash] = React.useState("escondido");
    const [telaResposta, setTelaResposta] = React.useState(false);

    function Resposta () {
        function Opcoes () {
            return (
                <div className="opcoes">
                    <p className="nivel-ruim">Não lembrei</p>
                    <p className="nivel-medio">Quase não lembrei</p>
                    <p className="nivel-bom">Zap!</p>
                </div>
            );
        }

        return (
            <Opcoes />
        );
    }

    function Escondido() {
      return (
        <div className="flashcard" onClick={() => setTelaFlash("pergunta")}>
          <p>Pergunta {props.indexPergunta}</p>
          <ion-icon name="play-outline"></ion-icon>
        </div>
      );
    }
    function Pergunta() {
      return (
        <div className="pergunta">
          <p>{props.pergunta}</p>
          {telaResposta ? <Resposta /> : <img className="seta-mostrar-opcoes" onClick={() => setTelaResposta(true)} src={seta} alt="" />}
        </div>
      );
    }

    return (
        <>
            {telaFlash === "escondido" ? <Escondido /> : ''}
            {telaFlash === "pergunta" ? <Pergunta /> : ''}
        </>
    );
  }

  return (
    <>
      <div className="deck">
        <Logo classe={"logo2"} />
        <div className="flashcards">
          {perguntas.map((p, index) => (
            <Flashcard
              pergunta={p}
              indexPergunta={index + 1}
            />
          ))}
        </div>
      </div>
    </>
  );
}
