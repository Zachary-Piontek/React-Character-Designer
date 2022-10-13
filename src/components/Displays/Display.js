import React from 'react';
import './display.css';

export default function Display({ head, body, legs }) {
  return (
    <div className='display'>
      <div className='image-display'>
        <img src={`${process.env.PUBLIC_URL}/Heads/${head}.png`} />
        <img src={`${process.env.PUBLIC_URL}/Bodies/${body}.png`} />
        <img src={`${process.env.PUBLIC_URL}/Legs/${legs}.png`} />
      </div>
    </div>
  );
}
