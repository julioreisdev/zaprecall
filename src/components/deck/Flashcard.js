import React from "react";
import seta from "../../assets/img/ZapRecall-Recursos/setinha.png";

export default function Flashcard(props) {
  const [telaFlash, setTelaFlash] = React.useState("escondido");
  const [telaResposta, setTelaResposta] = React.useState(false);
  const [resposta, setResposta] = React.useState("flashcard");
  const [icone, setIcone] = React.useState("play-outline");

  function respondido(valorResposta, valorIcone) {
    setTelaFlash("respondido");
    setResposta(valorResposta);
    setIcone(valorIcone);
    props.mudarIcones([...props.iconesAtuais, valorIcone]);
    props.contaRespostas(props.qtdRespostas + 1);
  }

  function Resposta() {
    function Opcoes() {
      return (
        <div className="opcoes">
          <p
            onClick={() => respondido("ruim", "ban-sharp")}
            className="nivel-ruim"
          >
            Não lembrei
          </p>
          <p
            onClick={() => respondido("medio", "help-circle-sharp")}
            className="nivel-medio"
          >
            Quase não lembrei
          </p>
          <p
            onClick={() => respondido("bom", "checkmark-circle-sharp")}
            className="nivel-bom"
          >
            Zap!
          </p>
        </div>
      );
    }

    return <Opcoes />;
  }

  function Escondido() {
    return (
      <div className={resposta} onClick={() => setTelaFlash('pergunta')}>
        <p>Pergunta {props.indexPergunta}</p>
        {}
        <ion-icon name={icone}></ion-icon>
      </div>
    );
  }
  function Pergunta() {
    return (
      <div className="pergunta">
        <p>{props.pergunta}</p>
        {telaResposta ? (
          <Resposta />
        ) : (
          <img
            className="seta-mostrar-opcoes"
            onClick={() => setTelaResposta(true)}
            src={seta}
            alt=""
          />
        )}
      </div>
    );
  }

  return (
    <>
      {telaFlash === "escondido" ? <Escondido /> : ""}
      {telaFlash === "respondido" ? <Escondido /> : ""}
      {(telaFlash === "pergunta" ) && (resposta === 'ruim' || resposta === 'medio' || resposta === 'bom') ? <Escondido /> : ""}
      {(telaFlash === "pergunta" ) && (resposta === 'flashcard') ? <Pergunta /> : ""}
    </>
  );
}
