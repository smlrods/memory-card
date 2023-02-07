import Card from "./Card";

function Cards(props) {
  const {cards, setGameScore} = props;
  return (
    <div>
      <h1>Cards</h1>
      {cards.map((card) => {
        return <Card key={card.name} card={card} setGameScore={setGameScore}/>
      })}
    </div>
  )
}

export default Cards;
