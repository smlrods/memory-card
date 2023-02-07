function Header(props) {
  const score = props.score;

  return (
    <div>
      <h1>Memory Card</h1>
      <p>Score: {score}</p>
    </div>
  );
}

export default Header;
