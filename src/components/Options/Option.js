import React from 'react';

export default function Option({ setHead }) {
  return (
    <div>
      <div>
        <label>Choose a Head</label>
        <select onChange={(event) => setHead(event.target.value)}>
          <option value='skull-1'>Head-1</option>
          <option value='skull-2'>Head-2</option>
          <option value='skull-3'>Head-3</option>
        </select>
      </div>
    </div>
  );
}