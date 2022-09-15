import React, { useState } from 'react';

import Option from '../Options/Option.js';
import Display from '../Displays/Display.js';

export default function Main() {
  const [head, setHead] = useState('skull-1');
  const [body, setBody] = useState('body-1');
  const [legs, setLegs] = useState('legs-1');

  return (  
    <main>
      <Option setHead={setHead} setBody={setBody} setLegs={setLegs}/>   
      <Display head={head} body={body} legs={legs}/>
    </main>
  );
}

