import React from 'react'
import { useState, useEffect } from 'react';

const LoggerComponents = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered or count changesd:', count);
    });

  return (
    <>
      <h1>Logger Components</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      
    </>
  )
}

export default LoggerComponents