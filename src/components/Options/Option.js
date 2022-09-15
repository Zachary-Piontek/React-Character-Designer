import React from 'react';
import '../Options/option.css';

export default function Option({ setHead, setBody, setLegs }) {
  return (
    <div className='option'>
      <div>
        <label>Choose a Head</label>
        <select onChange={(event) => setHead(event.target.value)}>
          <option value='skull-3'>Head-3</option>
          <option value='skull-1'>Head-1</option>
          <option value='skull-2'>Head-2</option>
        </select>
      </div>
      <div>
        <label>Choose a Body</label>
        <select onChange={(event) => setBody(event.target.value)}>
          <option value='body-1'>Body-1</option>
          <option value='body-2'>Body-2</option>
          <option value='body-3'>Body-3</option>
        </select>
      </div>
      <div>
        <label>Choose a Legs</label>
        <select onChange={(event) => setLegs(event.target.value)}>
          <option value='legs-3'>Legs-3</option>
          <option value='legs-1'>Legs-1</option>
          <option value='legs-2'>Legs-2</option>
        </select>
      </div>
    </div>
  );
}