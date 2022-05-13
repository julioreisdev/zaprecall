import logo from "../../assets/img/ZapRecall-Recursos/logo.png";
import './logo.css';

export default function Logo({classe}) {
    return (
      <div className={classe}>
        <img src={logo} />
        <h1>ZapRecall</h1>
      </div>
    );
  }