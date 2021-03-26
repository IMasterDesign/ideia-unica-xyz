import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Counter />
        </div>
    )
}

function Counter() {
    const [counter, setCount] = useState(1);

    function addCount() {
        setCount(counter +1);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={addCount}>Add</button>
        </div>
    )
}

export default Home