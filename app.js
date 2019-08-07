// react creates js objects that describe dom nodes
// react doesn't touch actual dom directly, it just managers what get rendered to the DOM
// it is renders job to interpret and create elements

const title = React.createElement(
  'h1', // type
  {id: 'main-title', title: 'This is a title.'}, // object
   'My first react element!' // content/children
);

const desc = React.createElement(
  'p',
  null,
  'I just learnt how to create a react node and render it to a DOM'
);

const header = React.createElement(
  'header',
  null,
  title,
  desc
);

ReactDOM.render(
  header, // element to render
  document.getElementById('root')// actual html element you want to update/render
); // creates and updates DOM, connects react to the DOM
