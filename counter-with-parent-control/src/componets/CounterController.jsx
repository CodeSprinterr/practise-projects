// CounterControl.js
import React, { useState } from 'react';
import Counter from './Counter';

function CounterControl() {
    const [reset, setReset] = useState(0);
    const [initialCount, setInitialCount] = useState(0);

    const handleReset = () => setReset(!reset);

    const handleInitialCountChange = (e) => {
        const value = parseInt(e.target.value, 10) || 0;
        setInitialCount(value);
    };
    const d = [1,2];
    return (
        <div>
            <h1>Counter Control</h1>
            <input
                type="number"
                placeholder="Set Initial Count"
                value={initialCount}
                onChange={handleInitialCountChange}
            />
            <button onClick={handleReset}>Reset Both Counters</button>
            {
                d.map((i) => (
                        <Counter key={i} reset={reset} initialCount={initialCount} />
                    )
                )
            }
        </div>
    );
}

export default CounterControl;
