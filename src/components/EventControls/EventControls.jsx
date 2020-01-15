import React, { useState } from 'react';
import s from './EventControls.module.scss';

function EventControls(props) {
  let [count, setCount] = useState(0);
  return (
    <div className={s.controls}>
        TICKETCS
        <button onClick={() => setCount(count+1)}> + </button>
        <div>{count}</div>
        <button onClick={() => setCount(count+1)}> - </button>
        TOTAL: { count * props.price}
    </div>
  );
}

export default EventControls;
