import React, { useState } from 'react';

import Option from '../Options/Option.js';
import Display from '../Displays/Display.js';
import List from '../Lists/List.js';
import background from '../../city-background.png';
import '../Main/main.css';

export default function Main() {
  const [head, setHead] = useState('skull-3');
  const [body, setBody] = useState('body-1');
  const [legs, setLegs] = useState('legs-3');
  const [phrase, setPhrase] = useState(['Bones is all I got.']);


  return (  
    <main style={{ backgroundImage: `url(${background})` }}>
      <Option setHead={setHead} setBody={setBody} setLegs={setLegs}/>   
      <Display head={head} body={body} legs={legs} phrase={phrase}/>
      <List phrase={phrase} setPhrase={setPhrase}/>
    </main>
  );
}

