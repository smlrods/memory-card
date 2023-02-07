import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import allCards from './utils/allCards';
import shuffle from './utils/shuffle';

function App() {
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(allCards);
  const [cardsSelected, setCardsSelected] = useState([]);

  const alreadySelected = (card) => (cardsSelected.includes(card)); 

  const setGameScore = (card) => {
    if (alreadySelected(card)) {
      setScore(0);
      setCardsSelected([]);
    } else {
      setScore(score + 1);
      setCardsSelected([...cardsSelected, card]);
    }
    setCards(shuffle(cards));
  }

  return (
    <div className="App">
      <Header score={score}/>
      <Cards setGameScore={setGameScore} cards={cards}/>
    </div>
  );
}

export default App;
