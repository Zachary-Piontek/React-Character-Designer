import React from 'react';

export default function Display({ head }) {
  return (
    <div>
      <img src={`${head}.png`} />
    </div>
  );
}