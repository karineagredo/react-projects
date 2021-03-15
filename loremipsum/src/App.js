import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data';

function App() {
  const [numOfParagraph, setnumOfParagraph] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    const showText = data.filter((str, index) => index < numOfParagraph);
    setText(showText);
  };
  return (
    <div className='App'>
      <div>Lorem impsum generator</div>
      <label>Enter number of paragraphs</label>
      <input
        type='number'
        value={numOfParagraph}
        onChange={(e) => setnumOfParagraph(e.target.value)}
      ></input>
      <button type='button' onClick={handleSubmit}>
        Generate
      </button>
      <p>paragrapsh requested: {numOfParagraph}</p>
      <h2>Result</h2>
      {text.map((text, index) => {
        return <li key={index}>{text}</li>;
      })}
    </div>
  );
}

export default App;
