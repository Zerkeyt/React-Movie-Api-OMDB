import React from 'react';

function Form(props) {
    return (
    <div>
        <label>
        <span>Skriv en filmtitel</span>
        <input
        onInput={(event) => props.handleOnInput(event.target.value)}
        />
        </label>
    </div>
    )
}

export default Form;
