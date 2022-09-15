import React, { useState } from 'react';

import '../Lists/list.css';

export default function List({ phrase, setPhrase }) {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const handlePhraseInput = () => {
    setPhrase((prePhrase) => [currentPhrase, ...prePhrase]);
    setCurrentPhrase('');
  };

  return (
    <div className='list'>
      <label>Catchphrase</label>
      <input value={currentPhrase} onChange={(event) => setCurrentPhrase(event.target.value)} />
      <button onClick={handlePhraseInput}>Add</button>
      <ul>
        {phrase.map((phrase) => (
          <li key={phrase}>{phrase}</li>
        ))}
      </ul>
    </div>
  );
}