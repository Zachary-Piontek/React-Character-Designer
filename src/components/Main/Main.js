import React, { useState } from 'react';

import Option from '../Options/Option';
import Display from '../Displays/Display';
import List from '../Lists/List';
import background from '../../chalkboard-background.jpeg';
import './main.css';

export default function Main() {
  const [head, setHead] = useState('skull-3');
  const [body, setBody] = useState('body-1');
  const [legs, setLegs] = useState('legs-3');
  const [phrase, setPhrase] = useState(['Bones and pants.']);


  return (  
    <main style={{ backgroundImage: `url(${background})` }}>
      <Option setHead={setHead} setBody={setBody} setLegs={setLegs}/>   
      <Display head={head} body={body} legs={legs} phrase={phrase}/>
      <List phrase={phrase} setPhrase={setPhrase}/>
    </main>
  );
}

