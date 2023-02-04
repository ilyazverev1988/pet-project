import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
const [count, setCount] = useState(0);
    return (
        <div className={classes.div}>
            <h1>{count}</h1>
            <button className={classes.button} onClick={()=>setCount(count+1)}>increment</button>
        </div>
    );
};

