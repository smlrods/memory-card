function Card(props) {
  const {card, setGameScore} = props; 
  return (
    <div onClick={() => setGameScore(card)}>
      <h2>{card.name}</h2>
      <div style={{backgroundImage: `url(${card.image})`}}></div>
    </div>
  );
}

export default Card; 
