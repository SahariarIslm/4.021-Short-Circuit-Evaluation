import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]=useState('K');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
    {/* {if(){console.log('hello world');}} */}
      <h1>{text||'john doe'}</h1>
      {text && <h1>hello world1</h1>}
      {!text && <h1>hello world2</h1>}
    </>
  );
};

export default ShortCircuit;
