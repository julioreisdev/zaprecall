import './footer.css';
import React from 'react';

export default function Footer (props) {

    function Contagem() {
        return (<div>{props.qtdRespondidas}/{4}</div>);
    }

    return (
        <div className="footer">
            <Contagem />
            {props.icones.map((name) => <ion-icon name={name}></ion-icon>)}
        </div>
    );
}