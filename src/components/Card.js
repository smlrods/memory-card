function Card(props) {
  const {card, setGameScore} = props; 
  return (
    <div onClick={() => setGameScore(card)}>
      <h2>{card.name}</h2>
      <img src={card.image}/>
    </div>
  );
}

export default Card; 
