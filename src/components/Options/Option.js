import React, { useState } from 'react';
import '../Options/option.css';

export default function Option({ setHead, setBody, setLegs }) {
  const [countHead, setCountHead] = useState(0);
  const [countBody, setCountBody] = useState (0);
  const [countLegs, setCountLegs] = useState (0);


  const handleHeadCount = (event) => {
    setHead(event.target.value);
    setCountHead(countHead + 1);
  };
  
  const handleBodyCount = (event) => {
    setBody(event.target.value);
    setCountBody(countBody + 1);  
  };
  
  const handleLegCount = (event) => {
    setLegs(event.target.value);
    setCountLegs(countLegs + 1);
  };

  return (
    <div className='option'>
      <div>
        <h3>{countHead}</h3>
        <label>Choose a Head</label>
        <select onChange={handleHeadCount}>
          <option value='skull-3'>Head-3</option>
          <option value='skull-1'>Head-1</option>
          <option value='skull-2'>Head-2</option>
        </select>
      </div>
      <div>
        <h3>{countBody}</h3>
        <label>Choose a Body</label>
        <select onChange={handleBodyCount}>
          <option value='body-1'>Body-1</option>
          <option value='body-2'>Body-2</option>
          <option value='body-3'>Body-3</option>
        </select>
      </div>
      <div>
        <h3>{countLegs}</h3>
        <label>Choose a Legs</label>
        <select onChange={handleLegCount}>
          <option value='legs-3'>Legs-3</option>
          <option value='legs-1'>Legs-1</option>
          <option value='legs-2'>Legs-2</option>
        </select>
      </div>
    </div>
  );
}