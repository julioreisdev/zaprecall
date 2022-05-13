import React from 'react';
import '../assets/css/reset.css';
import '../assets/css/style.css'
import Welcome from './welcome/Welcome';
import Deck from './deck/Deck';

export default function App() {

  const [tela, setTela] = React.useState('welcome');

  return (
    <>
     {tela === 'welcome' ? <Welcome entrar={setTela} /> : ''}
     {tela === 'deck' ? <Deck /> : ''}
    </>
  );
}