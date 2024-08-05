/* import img from './img.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="img" />
        <p>
         Hi  Anju <br></br>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

  import React from 'react';
  import './App.css';
  import img from './img.jpg';
  import Msg from './msg';
  import LS from './ls';
  import header from './header';
  import footer from './footer';
  import slider from './slider';
  function App(){
    return <div>
      <h1>App component </h1>
      <hr></hr>
      <img src={img} className="App-logo" alt="img" />
      <Msg />
      <hr></hr>
      <LS />
      <header></header>
      <header/>
      <slider/>
      <footer/>
      </div>
  }
export default App;
