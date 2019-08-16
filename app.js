// react creates js objects that describe dom nodes
// react doesn't touch actual dom directly, it just managers what get rendered to the DOM
// it is renders job to interpret and create elements
// props is that they are "read only" (or immutable), which means that a component can only read the props given to it,
//  never change them. The (parent) component higher in the tree owns and controls the property values.

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers }</span>
    </header>
  );
};

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id) }>✖</button>
        { props.name }
      </span>

      <Counter />
    </div>
  )
};

class Counter extends React.Component {

  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score + 1
    }));
  };

  decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score - 1
    }))
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    )
  }
}

class App extends React.Component {

  state = {
    players:  [
      {
        name: "Joy",
        id: 1
      },
      {
        name: "Treasure",
        id: 2
      },
      {
        name: "Ashley",
        id: 3
      },
      {
        name: "James",
        id: 4
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    })
  };

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={this.state.players.length} />

        {this.state.players.map( player =>
          <Player
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(
  <App />, // element to render
  document.getElementById('root')// actual html element you want to update/render
); // creates and updates DOM, connects react to the DOM
