// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [poemData, setPoemData] = useState({
    title: '',
    author: '',
    lines: [],
  });

  function generatePoem() {
    fetch('https://poetrydb.org/random')
      .then((response) => response.json())
      .then((data) => {
        const poem = data[0];
        setPoemData({
          title: poem.title,
          author: poem.author,
          lines: poem.lines,
        });
      })
      .catch((error) => {
        console.error('Error fetching poem:', error);
        setPoemData({
          title: 'Failed to fetch poem.',
          author: '',
          lines: ['Please try again later.'],
        });
      });
  }

  return (
    <div className="App">
      <div className="content-container">
        <h2 className="poem-title">{poemData.title}</h2>
        <h3 className="poem-author">- {poemData.author}</h3>
        <pre className="poem-content">{poemData.lines.join('\n')}</pre>
        <button onClick={generatePoem}>Generate Poem</button>
      </div>
    </div>
  );
}

export default App;
