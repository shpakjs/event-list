import React, { useState } from 'react';
import './EventControls.scss';

function EventControls(props) {
  let [count, setCount] = useState(0);
  return (
    <div className="controls">
        <h4>TICKETS</h4>
        <div className="count">
          <button onClick={() => setCount(count-1)} disabled={count === 0}> - </button>
          {count}
          <button onClick={() => setCount(count+1)} > + </button>
        </div>
        <div>TOTAL: { count * props.price} $</div>
    </div>
  );
}

export default EventControls;
