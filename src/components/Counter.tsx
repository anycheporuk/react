import { useState } from 'react';

export const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className='num'>{number}</div>
      <div className='buttons-container'>
        <button onClick={() => setNumber(number + 1)}>Increase</button>
        <button onClick={() => setNumber(number - 1)}>Decrease</button>
        <button onClick={() => setNumber(0)}>Reset</button>
      </div>

    </>

  );

};