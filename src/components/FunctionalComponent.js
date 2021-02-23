import React, { useState } from 'react';

const FunctionalComponent = (props) => {
    const [count, setCount] = useState(parseInt(props.start));
    const [lastName, setLastName] = useState('Gedda');
    
    const changeLastName = (e) => {
        setLastName(e.target.value);
    }

    return (
        <section>
            <h1>Functional Component</h1>
            <p>{count}</p>
            <button onClick={() => {setCount(count + 1)}}>+</button>
            <p>Insert last name: </p>
            <input onChange={changeLastName} value={lastName} ></input>
        </section>
    )
}

export default FunctionalComponent;
