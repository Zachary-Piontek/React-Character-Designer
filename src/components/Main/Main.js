import React, { useState } from 'react';

import Option from '../Options/Option.js';
import Display from '../Displays/Display.js';

export default function Main() {
  const [head, setHead] = useState('skull-1');

  return (  
    <main>
      <Option setHead={setHead}/>   
      <Display head={head}/>
    </main>
  );
}

