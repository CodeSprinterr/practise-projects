// Counter.js
import React, { useState, useEffect } from 'react';

function Counter({ reset, initialCount }) {
    const [count, setCount] = useState(initialCount || 0);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    useEffect(() => {
        setCount(initialCount || 0);
    }, [reset, initialCount]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
}

export default Counter;
