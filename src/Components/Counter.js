import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount ] = useState(0);
  
  const handleChangeName = e => setCount(e.target.value);

  return (
    <div>
      <input className="counter"
          type="text"
          value={count}
          onChange={handleChangeName}
        />
      <button className="button" onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button className="button2" onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;