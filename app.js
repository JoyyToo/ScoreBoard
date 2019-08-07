// react creates js objects that describe dom nodes
// react doesn't touch actual dom directly, it just managers what get rendered to the DOM
// it is renders job to interpret and create elements

const name = "Joy";

const desc = "I just learnt how to create a react node and render it to a DOM";

const header = (
  <header>
    <h1> {name}'s First react Element! </h1>
    <p> {desc} </p>
  </header>
);

ReactDOM.render(
  header, // element to render
  document.getElementById('root')// actual html element you want to update/render
); // creates and updates DOM, connects react to the DOM
