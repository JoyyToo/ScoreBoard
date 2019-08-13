// react creates js objects that describe dom nodes
// react doesn't touch actual dom directly, it just managers what get rendered to the DOM
// it is renders job to interpret and create elements

const Header = () => {
  return (
    <header>
      <h1>ScoreBoard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
};

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Joy
      </span>

      <Counter />
    </div>
  )
};

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">35</span>
      <button className="counter-action increment"> + </button>
    </div>
  )
};

const App = () => {
  return (
    <div className="scoreboard">
      <Header/>
      <Player/>
    </div>
  );
};

ReactDOM.render(
  <App />, // element to render
  document.getElementById('root')// actual html element you want to update/render
); // creates and updates DOM, connects react to the DOM
