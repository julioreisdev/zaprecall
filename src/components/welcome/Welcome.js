import "./welcome.css";
import Logo from '../Logo/Logo'



export default function Welcome({entrar}) {

  function Botao() {
    return <a onClick={() => entrar('deck')} >Iniciar recall!</a>;
  }

  return (
    <>
      <div className="welcome">
        <Logo classe={"logo1"} />
        <Botao />
      </div>
    </>
  );
}
