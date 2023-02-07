import Card from "./Card";
import '../assets/styles/Cards.css';

function Cards(props) {
  const {cards, setGameScore} = props;
  return (
    <div id="Cards">
      {cards.map((card) => {
        return <Card key={card.name} card={card} setGameScore={setGameScore}/>
      })}
    </div>
  )
}

export default Cards;
